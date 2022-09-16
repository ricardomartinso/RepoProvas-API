/*
  Warnings:

  - You are about to drop the column `teacherDisciplineId` on the `tests` table. All the data in the column will be lost.
  - Added the required column `teachersDisciplineId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "teacherDisciplineId",
ADD COLUMN     "teachersDisciplineId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teachersDisciplineId_fkey" FOREIGN KEY ("teachersDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
