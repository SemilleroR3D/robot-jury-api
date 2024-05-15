/*
  Warnings:

  - A unique constraint covering the columns `[competitionRegistrationId]` on the table `ParticipationOrder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ParticipationOrder_competitionRegistrationId_key" ON "ParticipationOrder"("competitionRegistrationId");
