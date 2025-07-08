/*
  Warnings:

  - Added the required column `adminID` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "adminID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
