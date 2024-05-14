/*
  Warnings:

  - You are about to alter the column `total` on the `CompetitionRegistration` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "CompetitionRegistration" ALTER COLUMN "total" SET DATA TYPE INTEGER;

-- CreateTable
CREATE TABLE "Logistic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "competitionId" TEXT NOT NULL,

    CONSTRAINT "Logistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogisticTask" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "logisticId" INTEGER NOT NULL,

    CONSTRAINT "LogisticTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnLogistic" (
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "logisticId" INTEGER NOT NULL,

    CONSTRAINT "UserOnLogistic_pkey" PRIMARY KEY ("userId","logisticId")
);

-- AddForeignKey
ALTER TABLE "Logistic" ADD CONSTRAINT "Logistic_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogisticTask" ADD CONSTRAINT "LogisticTask_logisticId_fkey" FOREIGN KEY ("logisticId") REFERENCES "Logistic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnLogistic" ADD CONSTRAINT "UserOnLogistic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnLogistic" ADD CONSTRAINT "UserOnLogistic_logisticId_fkey" FOREIGN KEY ("logisticId") REFERENCES "Logistic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
