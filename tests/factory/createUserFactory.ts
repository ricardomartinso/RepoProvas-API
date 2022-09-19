import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";

export default function createItemsFactory() {
  const password = faker.random.alphaNumeric(6);

  return {
    email: faker.internet.email(),
    password,
    confirmPassword: password,
  };
}
