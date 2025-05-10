-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_testId_fkey";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;
