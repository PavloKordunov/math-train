/*
  Warnings:

  - You are about to drop the column `viewAccess` on the `StudentScore` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "viewAccess" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "StudentScore" DROP COLUMN "viewAccess";
