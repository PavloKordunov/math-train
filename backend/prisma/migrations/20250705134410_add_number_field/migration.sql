/*
  Warnings:

  - Added the required column `number` to the `SubTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectType` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubTopic" ADD COLUMN     "number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "testTYpe" TEXT;

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "subjectType" TEXT NOT NULL;
