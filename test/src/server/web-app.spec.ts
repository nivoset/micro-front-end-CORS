import * as webApp from "./web-app";
import supertest from 'supertest';

describe("web-app", () => {
    const app = supertest(webApp);
    it("loads", async () => {
        await app.get("/").expect(404);
    });
})