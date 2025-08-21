/*
  Warnings:

  - A unique constraint covering the columns `[name,teacherId]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Folder_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Folder_name_teacherId_key" ON "Folder"("name", "teacherId");
