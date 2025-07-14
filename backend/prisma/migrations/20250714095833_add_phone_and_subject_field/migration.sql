/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('Mathematics', 'Ukrainian', 'English', 'History');

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "subject" "Subject" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_phone_key" ON "Teacher"("phone");
