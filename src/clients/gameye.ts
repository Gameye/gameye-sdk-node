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

    private validateConfig() {
        const { config } = this;

        const requiredFields = new Array<keyof GameyeClientConfig>("endpoint", "token");
        for (const field of requiredFields) {
            const value = config[field];
            if (isEmpty(value)) throw new errors.MissingConfigurationField(field);
        }
    }

}
