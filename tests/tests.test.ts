import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/database";
import createUser from "./factory/createUserFactory";
import createTest from "./factory/createTestsFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE tests RESTART IDENTITY`;
  await prisma.$executeRaw`TRUNCATE users RESTART IDENTITY`;
});

describe("Testa POST /tests", () => {
  it("Espera criar provas e retornar 201", async () => {
    const token = await returnTokenByLogin();

    const result = await supertest(app)
      .post("/tests")
      .set("Authorization", `Bearer ${token}`)
      .send(createTest());

    expect(result.status).toEqual(201);
  });

  it("Espera receber campos inexistentes e retornar 404", async () => {
    const token = await returnTokenByLogin();

    const invalidTest = createTest();
    invalidTest.categoryId = 20;
    invalidTest.teachersDisciplineId = 25;

    const result = await supertest(app)
      .post("/tests")
      .set("Authorization", `Bearer ${token}`)
      .send(invalidTest);

    expect(result.status).toEqual(404);
  });
});

describe("Testa GET /tests/disciplines", () => {
  it("Espera receber um array", async () => {
    const token = await returnTokenByLogin();

    const result = await supertest(app)
      .get("/tests/disciplines")
      .set("Authorization", `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it("Espera receber 401 pois não foi enviado token", async () => {
    const result = await supertest(app).get("/tests/disciplines");

    expect(result.status).toEqual(401);
  });
});

describe("Testa GET em /tests/teachers", () => {
  it("Espera receber um array", async () => {
    const token = await returnTokenByLogin();

    const result = await supertest(app)
      .get("/tests/teachers")
      .set("Authorization", `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it("Espera receber 401 pois não foi enviado token", async () => {
    const result = await supertest(app).get("/tests/teachers");

    expect(result.status).toEqual(401);
  });
});

async function returnTokenByLogin() {
  const user = await supertest(app).post("/signup").send(createUser());
  const userWithConfirmation = {
    ...user.body,
    confirmPassword: user.body.password,
  };

  const login = await supertest(app).post("/login").send(userWithConfirmation);

  const token = login.text.replace('{"token":"', "").replace('"}', "");

  return token;
}
