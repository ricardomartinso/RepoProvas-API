import { create, findByEmail } from "../repositories/authRepository";
import { CreateUser } from "../types/authTypes";
import bcrypt from "bcrypt";

export async function createUser(user: CreateUser) {
  const repeatedEmail = await findByEmail(user.email);

  if (repeatedEmail)
    throw { type: "Conflict", message: "User already registered!" };

  const encryptedUser = {
    email: user.email,
    password: bcrypt.hashSync(user.password, 10),
  };

  await create(encryptedUser);
}
