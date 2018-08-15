import { ApiTestServer } from ".";
import { GameyeClient } from "../clients";
import { Destructable } from "../utils";

export interface TestContextConfig {
    keepAliveInterval: number;
}

export class TestContext implements Destructable {

    public static defaultConfig = Object.freeze<TestContextConfig>({
        keepAliveInterval: 1300,
    });

    public static async create(config: Partial<TestContextConfig> = {}) {
        const instance = new this(config);
        await instance.initialize();
        return instance;
    }

    public apiTestServer!: ApiTestServer;
    public gameyeClient!: GameyeClient;

    private config: Readonly<TestContextConfig>;

    private constructor(config: Partial<TestContextConfig> = {}) {
        this.config = Object.freeze({
            ...this.constructor.prototype.defaultConfig,
            ...config,
        });
    }

    public async destroy() {
        await this.apiTestServer.destroy();
    }

    private async initialize() {
        const { keepAliveInterval } = this.config;
        const token = "testing";

        this.apiTestServer = await ApiTestServer.create({
            token,
            keepAliveInterval,
        });

        const endpoint = this.apiTestServer.getEndpoint();

        this.gameyeClient = new GameyeClient({
            token,
            endpoint,
        });
    }

}
