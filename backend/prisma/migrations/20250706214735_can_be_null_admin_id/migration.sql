-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_adminID_fkey";

-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_teacherId_fkey";

-- AlterTable
ALTER TABLE "Test" ALTER COLUMN "teacherId" DROP NOT NULL,
ALTER COLUMN "adminID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
