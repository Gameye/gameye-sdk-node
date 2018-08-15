import * as http from "http";
import * as Koa from "koa";
import * as route from "koa-route";
import * as net from "net";
import { PassThrough } from "stream";
import { QueryPatch } from "../clients";
import { Destructable } from "../utils";

export interface ApiTestServerConfig {
    token: string;
    keepAliveInterval: number;
}

type PatchListener = (patches: QueryPatch[]) => void;

export class ApiTestServer implements Destructable {
    public static defaultConfig = Object.freeze<ApiTestServerConfig>({
        token: "super-secret",
        keepAliveInterval: 1300,
    });

    public static async create(config: Partial<ApiTestServerConfig> = {}) {
        const instance = new this(config);
        await instance.initialize();
        return instance;
    }

    private config: Readonly<ApiTestServerConfig>;

    private koaServer = new Koa();
    private httpServer = http.createServer();
    private socketPool = new Set<net.Socket>();
    private patchListenerPool = new Set<PatchListener>();

    private constructor(config: Partial<ApiTestServerConfig> = {}) {
        this.config = Object.freeze({
            ...ApiTestServer.defaultConfig,
            ...config,
        });

        this.initializeHttpServer();
        this.initializeMiddleware();
    }

    public getEndpoint() {
        const address = this.httpServer.address();
        if (typeof address === "string") return address;
        return `http://localhost:${address.port}`;
    }

    public emitPatches(patches: QueryPatch[]) {
        const { patchListenerPool } = this;
        patchListenerPool.forEach(listener => listener(patches));
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

    private initializeMiddleware() {
        const { token, keepAliveInterval } = this.config;
        const { koaServer } = this;

        koaServer.use((context, next) => {
            if (context.request.header.authorization !== `Bearer ${token}`) {
                return context.throw(403);
            }
            return next();
        });

        koaServer.use(route.post("/action/*", context => {
            context.status = 202;
        }));

        koaServer.use(route.get("/fetch/*", async context => {
            switch (context.request.accepts("application/json", "application/x-ndjson")) {
                case "application/json": {
                    context.type = "application/json";
                    context.status = 200;
                    context.body = {};
                }
                case "application/x-ndjson": {
                    const writer = new PassThrough({});

                    context.type = "application/x-ndjson";
                    context.status = 200;
                    context.body = writer;
                    context.flushHeaders();

                    const patchListener = (patches: QueryPatch[]) => {
                        writer.write(JSON.stringify(patches));
                        writer.write("\n");
                    };
                    this.patchListenerPool.add(patchListener);

                    const keepAliveIntervalHandle = setInterval(() => {
                        writer.write("\n");
                    }, keepAliveInterval);

                    await new Promise(resolve => {
                        context.req.on("close", resolve);
                    });

                    clearInterval(keepAliveIntervalHandle);
                    this.patchListenerPool.delete(patchListener);

                    await new Promise(resolve => writer.end(resolve));
                }
            }
        }));

    }

    private initializeHttpServer() {
        const { httpServer, koaServer, socketPool } = this;

        httpServer.on(
            "request",
            koaServer.callback(),
        );

        httpServer.on("connection", socket => {
            socketPool.add(socket);
            socket.once("close", () => socketPool.delete(socket));
        });
    }

    private async initialize() {
        const { httpServer } = this;

        await new Promise((resolve, reject) => httpServer.listen({ port: 0 }, (err: any) => {
            if (err) return reject();
            else resolve();
        }));
    }

}
