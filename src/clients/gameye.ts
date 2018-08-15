import * as request from "request";
import { QuerySubscription } from ".";
import * as errors from "../errors";
import { isEmpty } from "../utils";
import { queryGame } from "./gameye-game";
import { commandStartMatch, commandStopMatch, queryMatch } from "./gameye-match";
import { queryStatistic } from "./gameye-statistic";
import { queryTemplate } from "./gameye-template";

export interface GameyeClientConfig {
    endpoint: string;
    token: string;
}

export class GameyeClient {

    public static defaultConfig = Object.freeze<GameyeClientConfig>({
        endpoint: process.env.GAMEYE_API_ENDPOINT || "",
        token: process.env.GAMEYE_API_TOKEN || "",
    });

    // #region Commands

    public commandStartMatch = commandStartMatch;
    public commandStopMatch = commandStopMatch;

    // #endregion

    // #region Queries

    public queryStatistic = queryStatistic;
    public queryTemplate = queryTemplate;
    public queryGame = queryGame;
    public queryMatch = queryMatch;

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
        const url = `${endpoint}/action/${type}`;
        const response = await new Promise<request.Response>(
            (resolve, reject) => request.post(url, {
                body: payload,
                json: true,
                auth: { bearer: token },
            }).
                on("error", reject).
                on("response", resolve),
        );
        if (response.statusCode !== 202) {
            throw new errors.UnexpectedResponseStatusError(
                202,
                response.statusCode,
            );
        }
    }

    public async query<TState extends object, TArgs extends object = {}>(
        type: string,
        arg: TArgs,
    ): Promise<TState> {
        const { endpoint, token } = this.config;
        const url = `${endpoint}/fetch/${type}`;
        const response = await new Promise<request.Response>(
            (resolve, reject) => request.get(url, {
                qs: arg,
                auth: { bearer: token },
                headers: { accept: "application/json" },
            }).
                on("error", reject).
                on("response", resolve),
        );
        if (response.statusCode !== 200) {
            throw new errors.UnexpectedResponseStatusError(
                200,
                response.statusCode,
            );
        }

        const { body } = await response.toJSON();
        return body;
    }

    public async subscribe<TState extends object, TArgs extends object = {}>(
        type: string,
        arg: TArgs,
    ): Promise<QuerySubscription<TState>> {
        const { endpoint, token } = this.config;
        const url = `${endpoint}/fetch/${type}`;
        const response = await new Promise<request.Response>(
            (resolve, reject) =>
                request.get(url, {
                    qs: arg,
                    auth: { bearer: token },
                    headers: { accept: "application/x-ndjson" },
                }).
                    on("error", reject).
                    on("response", resolve),
        );
        if (response.statusCode !== 200) {
            throw new errors.UnexpectedResponseStatusError(
                200,
                response.statusCode,
            );
        }

        const subscription = new QuerySubscription<TState>(response);
        return subscription;
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
