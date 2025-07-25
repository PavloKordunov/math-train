/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `hours` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `minutes` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `weeks` on the `Schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "dayOfWeek",
DROP COLUMN "duration",
DROP COLUMN "hours",
DROP COLUMN "minutes",
DROP COLUMN "title",
DROP COLUMN "weeks";

-- CreateTable
CREATE TABLE "ScheduleEvent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "minutes" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "weeks" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,

    CONSTRAINT "ScheduleEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScheduleEvent" ADD CONSTRAINT "ScheduleEvent_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
