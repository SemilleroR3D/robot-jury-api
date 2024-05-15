/*
  Warnings:

  - Added the required column `try` to the `ParticipationOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParticipationOrder" ADD COLUMN     "try" INTEGER NOT NULL;
