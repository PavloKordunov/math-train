/*
  Warnings:

  - You are about to drop the column `description` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `studentScore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "studentScore" DROP CONSTRAINT "studentScore_studentId_fkey";

-- DropForeignKey
ALTER TABLE "studentScore" DROP CONSTRAINT "studentScore_testId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "description",
ADD COLUMN     "answers" TEXT[],
ADD COLUMN     "pairs" TEXT[],
ADD COLUMN     "type" TEXT,
ALTER COLUMN "image" DROP NOT NULL;

-- DropTable
DROP TABLE "studentScore";

-- CreateTable
CREATE TABLE "StudentScore" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StudentScore_studentId_idx" ON "StudentScore"("studentId");

-- CreateIndex
CREATE INDEX "StudentScore_testId_idx" ON "StudentScore"("testId");

-- AddForeignKey
ALTER TABLE "StudentScore" ADD CONSTRAINT "StudentScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentScore" ADD CONSTRAINT "StudentScore_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
