/*
  Warnings:

  - The `answers` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pairs` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "answers",
ADD COLUMN     "answers" JSONB,
DROP COLUMN "pairs",
ADD COLUMN     "pairs" JSONB;
