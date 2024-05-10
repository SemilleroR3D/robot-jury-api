-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "registerDeadline" TIMESTAMP(3) NOT NULL,
    "deadlineUpdate" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Competition_name_key" ON "Competition"("name");

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
