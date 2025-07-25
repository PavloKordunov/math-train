/*
  Warnings:

  - The `weeks` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `dayOfWeek` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `duration` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `hours` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `minutes` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "dayOfWeek",
ADD COLUMN     "dayOfWeek" INTEGER NOT NULL,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL,
DROP COLUMN "hours",
ADD COLUMN     "hours" INTEGER NOT NULL,
DROP COLUMN "minutes",
ADD COLUMN     "minutes" INTEGER NOT NULL,
DROP COLUMN "weeks",
ADD COLUMN     "weeks" INTEGER;
