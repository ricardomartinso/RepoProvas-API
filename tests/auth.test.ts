import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/database";
import createUser from "./factory/createUserFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE users RESTART IDENTITY`;
});

describe("Testa POST /signup", () => {
  it("Espera receber cadastro do usuário válido e retornar 201", async () => {
    const result = await supertest(app).post("/signup").send(createUser());

    expect(result.status).toEqual(201);
  });

  it("Espera receber email repetido e retornar 409", async () => {
    const user = createUser();
    await supertest(app).post("/signup").send(user);
    const result = await supertest(app).post("/signup").send(user);

    expect(result.status).toEqual(409);
  });
});

describe("Testa POST /login", () => {
  it("Espera receber um corpo válido e retornar um token", async () => {
    const user = await supertest(app).post("/signup").send(createUser());
    const userWithConfirmation = {
      ...user.body,
      confirmPassword: user.body.password,
    };

    const result = await supertest(app)
      .post("/login")
      .send(userWithConfirmation);

    expect(result.status).toEqual(200);
  });

  it("Espera receber corpo inválido e retornar 401", async () => {
    const generatedUser = createUser();
    const result = await supertest(app).post("/login").send(generatedUser);

    expect(result.status).toEqual(401);
  });
});
