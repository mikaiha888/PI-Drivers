const request = require("supertest");
const express = require("express");
const driversRouter = require("../src/routes/driversRouter");

const app = express();
app.use(express.json());
app.use("/drivers", driversRouter);

describe("Drivers Router", () => {
  it("should respond with status 200 and JSON array when GET /drivers/search is called", async () => {
    const response = await request(app).get("/drivers/search?name=John");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  it("should respond with status 200 and JSON object when GET /drivers/:id is called", async () => {
    const response = await request(app).get("/drivers/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });

  it("should respond with status 201 and JSON object when POST /drivers is called", async () => {
    const response = await request(app)
      .post("/drivers")
      .send({
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1977-05-10",
        nationality: "american",
        description: "He is John Doe",
        image: "john_doe.jpg",
        teams: ["equipoA", "equipoB"],
      });
    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.any(Object));
  });

  //   it("should respond with status 200 and JSON object when PUT /drivers is called", async () => {
  //     const response = await request(app)
  //       .put("/drivers")
  //       .send({ id: 1, name: "Jane Smith", age: 35, city: "Los Angeles" });
  //     expect(response.status).toBe(200);
  //     expect(response.body).toEqual(expect.any(Object));
  //   });

  //   it("should respond with status 200 and JSON object when DELETE /drivers is called", async () => {
  //     const response = await request(app).delete("/drivers");
  //     expect(response.status).toBe(200);
  //     expect(response.body).toEqual(expect.any(Object));
  //   });
});
