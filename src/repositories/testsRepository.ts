import { prisma } from "../config/database";
import { CreateTest } from "../types/testTypes";

export async function create(data: CreateTest): Promise<void> {
  await prisma.test.create({
    data: {
      name: data.name,
      pdfUrl: data.pdfUrl,
      teacherDiscipline: { connect: { id: Number(data.teachersDisciplineId) } },
      category: { connect: { id: Number(data.categoryId) } },
    },
  });
}

export async function findById(testId: number) {
  const test = await prisma.test.findUnique({ where: { id: testId } });

  if (!test) throw { type: "NotFound", message: "Test didn't exist!" };

  return test;
}

export async function findCategoryId(categoryId: number) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category) throw { type: "NotFound", message: "Category doesn't exist" };

  return category;
}

export async function findTeachersDisciplineId(teachersDisciplineId: number) {
  const teacherDiscipline = await prisma.teacherDiscipline.findUnique({
    where: { id: teachersDisciplineId },
  });

  if (!teacherDiscipline)
    throw { type: "NotFound", message: "Teacher Discipline doesn't exist" };

  return teacherDiscipline;
}
