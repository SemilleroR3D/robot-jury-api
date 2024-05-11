-- CreateEnum
CREATE TYPE "StatusCompetitionRegister" AS ENUM ('REGISTERED', 'INSCRIBED', 'REJECTED');

-- AlterTable
ALTER TABLE "Robot" ALTER COLUMN "registerDate" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "CompetitionRegistration" (
    "id" TEXT NOT NULL,
    "status" "StatusCompetitionRegister" NOT NULL DEFAULT 'REGISTERED',
    "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "img" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "robotId" TEXT,

    CONSTRAINT "CompetitionRegistration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompetitionRegistration" ADD CONSTRAINT "CompetitionRegistration_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionRegistration" ADD CONSTRAINT "CompetitionRegistration_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionRegistration" ADD CONSTRAINT "CompetitionRegistration_robotId_fkey" FOREIGN KEY ("robotId") REFERENCES "Robot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
