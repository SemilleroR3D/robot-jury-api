/*
  Warnings:

  - You are about to drop the column `userTypeId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userTypeId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userTypeId";

-- CreateTable
CREATE TABLE "UserOnUserType" (
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userTypeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserOnUserType_pkey" PRIMARY KEY ("userId","userTypeId")
);

-- AddForeignKey
ALTER TABLE "UserOnUserType" ADD CONSTRAINT "UserOnUserType_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnUserType" ADD CONSTRAINT "UserOnUserType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
