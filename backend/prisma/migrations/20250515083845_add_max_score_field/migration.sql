/*
  Warnings:

  - Added the required column `maxScore` to the `StudentScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentScore" ADD COLUMN     "maxScore" INTEGER NOT NULL;
