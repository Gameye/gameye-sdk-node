import * as http from "http";
import * as createHttpError from "http-errors";
import * as https from "https";
import { URL } from "url";
import { readAll } from "../utils";

export const timeoutError = new Error("Timeout!!!");

export function createRequestStream(
    method: string,
    url: URL,
    headers: any,
    timeout: number,
) {

    const requestOptions: http.RequestOptions = {
        method,
        hostname: url.hostname,
        port: url.port,
        path: url.pathname + url.search,
        headers,
        timeout,
    };

    let request: http.ClientRequest;
    switch (url.protocol) {
        case undefined:
        case "":
        case "http:":
            request = http.request(requestOptions);
            break;

        case "https:":
            request = https.request(requestOptions);
            break;

        default:
            throw new Error(`protocol not supported ${url.protocol}`);
    }

    return request;
}

export async function getResponse(
    request: http.ClientRequest,
) {
    const response = await new Promise<http.IncomingMessage>(
        (resolve, reject) => request.
            on("response", resolve).
            on("error", reject).
            on("timeout", () => reject(timeoutError)),
    );

    const { statusCode, statusMessage } = response;
    if (!(statusCode && statusCode >= 200 && statusCode < 300)) {
        throw createHttpError(statusCode!, statusMessage!);
    }

    return response;
}

export async function readResponse(
    response: http.IncomingMessage,
) {
    const { headers } = response;
    const [contentType] = (headers["content-type"] || "").split(";");
    switch (contentType) {
        case "application/json": {
            const data = await readAll(response);
            const result = JSON.parse(data);
            return result;
        }

        default: {
            const result = await readAll(response);
            return result;
        }
    }
}
