import { prisma } from "../config/database";
import { CreateUser } from "../types/authTypes";

export async function create(data: CreateUser) {
  await prisma.user.create({
    data,
  });
}

export async function findById(userId: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw { type: "NotFound", message: "User not created!" };

  return userId;
}

export async function findByEmail(email: string) {
  const userEmail = await prisma.user.findUnique({ where: { email } });

  return userEmail;
}
