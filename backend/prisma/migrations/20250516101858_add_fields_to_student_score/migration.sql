-- AlterTable
ALTER TABLE "StudentScore" ADD COLUMN     "studentTest" JSONB,
ADD COLUMN     "viewAccess" BOOLEAN NOT NULL DEFAULT false;
