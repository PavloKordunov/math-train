/*
  Warnings:

  - You are about to drop the `ScheduleEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dayOfWeek` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hours` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minutes` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeks` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ScheduleEvent" DROP CONSTRAINT "ScheduleEvent_scheduleId_fkey";

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "dayOfWeek" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "hours" TEXT NOT NULL,
ADD COLUMN     "minutes" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "weeks" TEXT NOT NULL;

-- DropTable
DROP TABLE "ScheduleEvent";
