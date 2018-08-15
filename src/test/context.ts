import { ApiTestServer } from ".";
import { GameyeClient } from "../clients";
import { Destructable } from "../utils";

export class TestContext implements Destructable {

    public static async create() {
        const instance = new this();
        await instance.initialize();
        return instance;
    }

    public apiTestServer!: ApiTestServer;
    public gameyeClient!: GameyeClient;

    private constructor() {
    }

    public async destroy() {
        await this.apiTestServer.destroy();
    }

    private async initialize() {
        const token = "testing";
        this.apiTestServer = await ApiTestServer.create({ token });
        const endpoint = this.apiTestServer.getEndpoint();

        this.gameyeClient = new GameyeClient({
            token,
            endpoint,
        });
    }

}
