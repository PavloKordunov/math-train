/*
  Warnings:

  - You are about to drop the column `subTopicId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_subTopicId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "subTopicId";

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "subTopicId" TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "timeLimit" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_subTopicId_fkey" FOREIGN KEY ("subTopicId") REFERENCES "SubTopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
