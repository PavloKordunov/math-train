-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "minutes" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "weeks" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_teacherId_key" ON "Schedule"("teacherId");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
