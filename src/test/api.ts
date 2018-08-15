import * as http from "http";
import * as Koa from "koa";
import * as net from "net";
import { Destructable } from "../utils";

export interface ApiTestServerConfig {
    token: string;
}

export class ApiTestServer implements Destructable {
    public static async create(config: ApiTestServerConfig) {
        const instance = new this(config);
        await instance.initialize();
        return instance;
    }

    private koaServer = new Koa();
    private httpServer = http.createServer();
    private socketPool = new Set<net.Socket>();

    private constructor(private config: ApiTestServerConfig) {
        const { httpServer, socketPool } = this;

        httpServer.on(
            "request",
            this.koaServer.callback(),
        );

        httpServer.on("connection", socket => {
            socketPool.add(socket);
            socket.once("close", () => socketPool.delete(socket));
        });

    }

    public getEndpoint() {
        const address = this.httpServer.address();
        if (typeof address === "string") return address;
        return `http://localhost:${address.port}`;
    }

    public async destroy() {
        const { httpServer, socketPool } = this;

        await new Promise(resolve => {
            const maybeResolve = () => {
                if (socketPool.size === 0) resolve();
            };
            socketPool.forEach(socket => {
                socket.once("close", maybeResolve);
                socket.destroy();
            });
            maybeResolve();
        });

        await new Promise((resolve, reject) => {
            httpServer.close((err: any) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    private async initialize() {
        await new Promise((resolve, reject) => this.httpServer.listen(0, (err: any) => {
            if (err) return reject();
            else resolve();
        }));
    }
}
