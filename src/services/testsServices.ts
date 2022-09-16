import {
  create,
  findCategoryId,
  findTeachersDisciplineId,
} from "../repositories/testsRepository";
import { CreateTest } from "../types/testTypes";

export async function createTest(test: CreateTest) {
  await findCategoryId(Number(test.categoryId));
  await findTeachersDisciplineId(Number(test.teachersDisciplineId));
  await create(test);
}
