import * as fetch from "isomorphic-fetch";
import * as querystring from "querystring";
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

    public constructor(config: Partial<GameyeClientConfig>) {
        this.config = Object.freeze({
            ...this.constructor.prototype.defaultConfig,
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
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };

        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(payload),
        });
        if (response.status !== 202) {
            throw new errors.UnexpectedResponseStatusError(
                202,
                response.status,
            );
        }
    }

    public async query<TState extends object, TArgs extends object = {}>(
        type: string,
        arg: TArgs,
        subscribe: boolean = false,
    ): Promise<TState> {
        const { endpoint, token } = this.config;
        const query = querystring.stringify(arg);
        const url = `${endpoint}/fetch/${type}` + (query && "?") + query;
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };

        const response = await fetch(url, {
            headers,
        });
        if (response.status !== 200) {
            throw new errors.UnexpectedResponseStatusError(
                200,
                response.status,
            );
        }

        const state: TState = await response.json();
        return state;
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
