/*
  Warnings:

  - You are about to drop the column `endTime` on the `Test` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AssignedTest" ADD COLUMN     "endTime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "endTime";
