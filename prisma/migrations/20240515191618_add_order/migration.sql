-- CreateTable
CREATE TABLE "ParticipationOrder" (
    "id" SERIAL NOT NULL,
    "isRunning" BOOLEAN NOT NULL DEFAULT false,
    "place" INTEGER NOT NULL,
    "competitionRegistrationId" TEXT NOT NULL,

    CONSTRAINT "ParticipationOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ParticipationOrder" ADD CONSTRAINT "ParticipationOrder_competitionRegistrationId_fkey" FOREIGN KEY ("competitionRegistrationId") REFERENCES "CompetitionRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
