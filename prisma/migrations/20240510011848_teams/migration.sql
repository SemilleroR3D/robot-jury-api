-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "img" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnTeams" (
    "status" BOOLEAN NOT NULL DEFAULT true,
    "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "UsersOnTeams_pkey" PRIMARY KEY ("userId","teamId")
);

-- AddForeignKey
ALTER TABLE "UsersOnTeams" ADD CONSTRAINT "UsersOnTeams_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnTeams" ADD CONSTRAINT "UsersOnTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
