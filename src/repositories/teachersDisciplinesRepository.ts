import { prisma } from "../config/database";

export async function findTeachersDisciplineId(teachersDisciplineId: number) {
  const teacherDiscipline = await prisma.teacherDiscipline.findUnique({
    where: { id: teachersDisciplineId },
  });

  if (!teacherDiscipline)
    throw { type: "NotFound", message: "Teacher Discipline doesn't exist" };

  return teacherDiscipline;
}
