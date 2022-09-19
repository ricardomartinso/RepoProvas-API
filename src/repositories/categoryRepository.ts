import { prisma } from "../config/database";

export async function findCategoryId(categoryId: number) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category) throw { type: "NotFound", message: "Category doesn't exist" };

  return category;
}
