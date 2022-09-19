import { findById } from "../repositories/authRepository";
import { findCategoryId } from "../repositories/categoryRepository";
import { findTeachersDisciplineId } from "../repositories/teachersDisciplinesRepository";
import {
  create,
  findTestsByDiscipline,
  findTestsByTeachers,
} from "../repositories/testsRepository";
import { CreateTest } from "../types/testTypes";

export async function createTest(test: CreateTest, userId: number) {
  await findById(userId);

  await findCategoryId(Number(test.categoryId));
  await findTeachersDisciplineId(Number(test.teachersDisciplineId));

  const createdTest = await create(test);

  return createdTest;
}

export async function getTestsByDiscipline() {
  return await findTestsByDiscipline();
}

export async function getTestsByTeachers() {
  return await findTestsByTeachers();
}
