import { prisma } from "../config/database";
import { CreateTest } from "../types/testTypes";

export async function create(data: CreateTest) {
  const test = await prisma.test.create({
    data: {
      name: data.name,
      pdfUrl: data.pdfUrl,
      teacherDiscipline: { connect: { id: Number(data.teachersDisciplineId) } },
      category: { connect: { id: Number(data.categoryId) } },
    },
  });

  return test;
}

export async function findById(testId: number) {
  const test = await prisma.test.findUnique({ where: { id: testId } });

  if (!test) throw { type: "NotFound", message: "Test didn't exist!" };

  return test;
}

export async function findTestsByDiscipline() {
  const tests = await prisma.term.findMany({
    where: {},
    distinct: ["number"],
    select: {
      number: true,
      disciplines: {
        distinct: ["name"],
        select: {
          name: true,
          teacherDisciplines: {
            select: {
              teacher: { select: { name: true } },
              tests: {
                select: {
                  name: true,
                  pdfUrl: true,
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return tests;
}

export async function findTestsByTeachers() {
  return await prisma.teacher.findMany({
    where: {},
    distinct: ["name"],
    select: {
      name: true,
      teacherDisciplines: {
        select: {
          discipline: { select: { name: true } },
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: { select: { name: true } },
            },
            orderBy: { categoryId: "desc" },
          },
        },
      },
    },
  });
}
