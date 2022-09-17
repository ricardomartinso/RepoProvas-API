import { findById } from "../repositories/authRepository";
import {
  create,
  findCategoryId,
  findTeachersDisciplineId,
} from "../repositories/testsRepository";
import { CreateTest } from "../types/testTypes";

export async function createTest(test: CreateTest, userId: number) {
  await findById(userId);

  await findCategoryId(Number(test.categoryId));
  await findTeachersDisciplineId(Number(test.teachersDisciplineId));

  const createdTest = await create(test);

  return createdTest;
}
