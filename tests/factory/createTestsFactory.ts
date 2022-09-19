import { faker } from "@faker-js/faker";
import { Test } from "@prisma/client";

export default function createItemsFactory() {
  return {
    name: faker.lorem.word(),
    pdfUrl: faker.internet.url(),
    categoryId: faker.datatype.number({ min: 1, max: 3 }),
    teachersDisciplineId: faker.datatype.number({
      min: 1,
      max: 6,
    }),
  };
}
