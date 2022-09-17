import { prisma } from "../config/database";
import { AuthUser } from "../types/authTypes";

export async function create(data: AuthUser) {
  await prisma.user.create({
    data,
  });
}

export async function findById(userId: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw { type: "NotFound", message: "User not created!" };

  return user;
}

export async function findByEmail(email: string) {
  const userEmail = await prisma.user.findUnique({ where: { email } });

  return userEmail;
}
