import * as test from "blue-tape";
import * as fetch from "isomorphic-fetch";
import { ApiTestServer } from "../test";
import { use } from "../utils";

test(
    "ApiTestServer",
    t => use(ApiTestServer.create({ token: "123" }), async apiTestServer => {
        const endpoint = apiTestServer.getEndpoint();
        t.ok(endpoint.startsWith("http://localhost:"));

        {
            const response = await fetch(endpoint);
            t.equal(response.status, 403);
        }

        {
            const response = await fetch(endpoint, {
                headers: { Authorization: "Bearer 123" },
            });
            t.equal(response.status, 404);
        }

        {
            const response = await fetch(endpoint + "/fetch/type", {
                headers: { Authorization: "Bearer 123" },
            });
            t.equal(response.status, 200);
        }

        {
            const response = await fetch(endpoint + "/action/type", {
                method: "POST",
                headers: { Authorization: "Bearer 123" },
            });
            t.equal(response.status, 202);
        }

    }),
);
