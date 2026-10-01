const request = require("supertest");
const app = require("./app");

describe("Node.js Application", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Node.js Application is Running Successfully!"
    );
  });

  test("GET /health should return OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});