import * as errors from "../errors";
import { isEmpty } from "../utils";

export interface GameyeClientConfig {
    endpoint: string;
    token: string;
}

export class GameyeClient {

    public static defaultConfig = Object.freeze<GameyeClientConfig>({
        endpoint: process.env.GAMEYE_API_ENDPOINT || "",
        token: process.env.GAMEYE_API_TOKEN || "",
    });
    private config: Readonly<GameyeClientConfig>;

    public constructor(config: Partial<GameyeClient>) {
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
