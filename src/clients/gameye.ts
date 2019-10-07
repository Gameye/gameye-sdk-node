import { second } from "msecs";
import * as querystring from "querystring";
import { PassThrough, pipeline, Readable } from "stream";
import * as errors from "../errors";
import * as streams from "../streams";
import { isEmpty, reducePatch, writeAll } from "../utils";
import { commandStartMatch, commandStopMatch, queryMatch, subscribeMatch } from "./gameye-match";
import { queryStatistic, subscribeStatistic } from "./gameye-statistic";

export interface GameyeClientConfig {
    endpoint: string;
    token: string;
}

/**
 * Gameye client class for communicating with the Gameye API
 */
export class GameyeClient {

    public static defaultConfig = Object.freeze<GameyeClientConfig>({
        endpoint: process.env.GAMEYE_API_ENDPOINT || "https://api.gameye.com",
        token: process.env.GAMEYE_API_TOKEN || "",
    });

    // #region commands

    public commandStartMatch = commandStartMatch;
    public commandStopMatch = commandStopMatch;

    // #endregion

    // #region queries

    public queryStatistic = queryStatistic;
    public queryMatch = queryMatch;

    // #endregion

    // #region subscribe

    public subscribeStatistic = subscribeStatistic;
    public subscribeMatch = subscribeMatch;

    // #endregion

    private config: Readonly<GameyeClientConfig>;

    public constructor(config: Partial<GameyeClientConfig> = {}) {
        this.config = Object.freeze({
            ...GameyeClient.defaultConfig,
            ...config,
        });

        this.validateConfig();
    }

    public async command<TPayload extends object>(
        type: string,
        payload: TPayload,
    ): Promise<void> {
        const { endpoint, token } = this.config;
        const url = new URL(`${endpoint}/command/${type}`);

        const requestStream = streams.createRequestStream(
            "POST",
            url,
            {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`,
            },
            10 * second,
        );

        await writeAll(requestStream, JSON.stringify(payload));

        try {
            const responseStream = await streams.getResponse(requestStream);
            try {
                const result = await streams.readResponse(responseStream);
                return result;
            }
            finally {
                responseStream.destroy();
            }
        }
        finally {
            requestStream.abort();
            requestStream.destroy();
        }
    }

    public async query<TState extends object>(
        type: string,
        arg: any,
    ): Promise<TState> {
        const { endpoint, token } = this.config;
        const url = new URL(`${endpoint}/query/${type}`);
        url.search = querystring.stringify(arg);

        const requestStream = streams.createRequestStream(
            "GET",
            url,
            {
                accept: "application/json",
                authorization: `Bearer ${token}`,
            },
            30 * second,
        );

        await writeAll(requestStream);

        try {
            const responseStream = await streams.getResponse(requestStream);
            try {
                const result = await streams.readResponse(responseStream);
                return result;
            }
            finally {
                responseStream.destroy();
            }
        }
        finally {
            requestStream.abort();
            requestStream.destroy();
        }
    }

    public async subscribe(
        type: string,
        arg: any,
    ): Promise<Readable> {
        const { endpoint, token } = this.config;
        const url = new URL(`${endpoint}/query/${type}`);
        url.search = querystring.stringify(arg);

        const requestStream = streams.createRequestStream(
            "GET",
            url,
            {
                accept: "application/x-ndjson",
                authorization: `Bearer ${token}`,
            },
            30 * second,
        );

        await writeAll(requestStream);

        try {
            const responseStream = await streams.getResponse(requestStream);
            try {
                const split = new streams.SplitTransform();
                const fromJson = new streams.FromJSONTransform();
                const reduce = new streams.ReduceTransform(reducePatch, {});
                const pass = new PassThrough({
                    objectMode: true,
                    autoDestroy: true,
                });

                pipeline(
                    responseStream,
                    split,
                    fromJson,
                    reduce,
                    pass,
                    error => {
                        requestStream.abort();
                        requestStream.destroy();
                        pass.push(null);
                        pass.destroy(error || undefined);
                    },
                );

                return pass;
            }
            catch (error) {
                responseStream.destroy();
                throw error;
            }
        }
        catch (error) {
            requestStream.abort();
            requestStream.destroy();
            throw error;
        }

    }

    private validateConfig() {
        const { config } = this;

        const requiredFields = new Array<keyof GameyeClientConfig>("endpoint", "token");
        for (const field of requiredFields) {
            const value = config[field];
            if (isEmpty(value)) throw new errors.MissingConfigurationField(field);
        }
    }

}
