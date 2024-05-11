-- CreateTable
CREATE TABLE "UserOnEvaluation" (
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "evaluationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserOnEvaluation_pkey" PRIMARY KEY ("evaluationId","userId")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "percent" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationCriterion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "percent" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "evaluationId" TEXT NOT NULL,

    CONSTRAINT "EvaluationCriterion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionNote" (
    "note" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "evaluationCriterionId" INTEGER NOT NULL,
    "competitionRegistrationId" TEXT NOT NULL,

    CONSTRAINT "CompetitionNote_pkey" PRIMARY KEY ("evaluationCriterionId","competitionRegistrationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Evaluation_name_key" ON "Evaluation"("name");

-- AddForeignKey
ALTER TABLE "UserOnEvaluation" ADD CONSTRAINT "UserOnEvaluation_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnEvaluation" ADD CONSTRAINT "UserOnEvaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationCriterion" ADD CONSTRAINT "EvaluationCriterion_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionNote" ADD CONSTRAINT "CompetitionNote_evaluationCriterionId_fkey" FOREIGN KEY ("evaluationCriterionId") REFERENCES "EvaluationCriterion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionNote" ADD CONSTRAINT "CompetitionNote_competitionRegistrationId_fkey" FOREIGN KEY ("competitionRegistrationId") REFERENCES "CompetitionRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
