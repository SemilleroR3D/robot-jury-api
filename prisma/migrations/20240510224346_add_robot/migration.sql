-- CreateTable
CREATE TABLE "Robot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "connectionDiagram" TEXT NOT NULL,
    "robotProgramming" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "registerDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Robot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Robot_name_key" ON "Robot"("name");
