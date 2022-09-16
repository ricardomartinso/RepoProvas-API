import { prisma } from "../config/database";
import { CreateTest } from "../types/testTypes";

export async function create(data: CreateTest) {
  await prisma.test.create({
    data,
  });
}
