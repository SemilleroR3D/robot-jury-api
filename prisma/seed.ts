import { PrismaClient } from '@prisma/client';
import {
  users,
  userOnUserTypes,
  userTypes,
  categories,
  competitions,
  rules,
  banners,
  teams,
  userOnTeams,
  robots,
  competitionRegistrations,
  evaluations,
  evaluationCriterions,
  userOnEvaluations,
  competitionNotes,
  logistics,
  logisticTasks,
  userOnLogistics,
  participationOrder,
} from './script';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.userType.createMany({
    data: userTypes,
    skipDuplicates: true,
  });

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  await prisma.userOnUserType.createMany({
    data: userOnUserTypes,
    skipDuplicates: true,
  });

  await prisma.competition.createMany({
    data: competitions,
    skipDuplicates: true,
  });

  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  await prisma.rule.createMany({
    data: rules,
    skipDuplicates: true,
  });

  await prisma.banner.createMany({
    data: banners,
    skipDuplicates: true,
  });

  await prisma.team.createMany({
    data: teams,
    skipDuplicates: true,
  });

  await prisma.usersOnTeams.createMany({
    data: userOnTeams,
    skipDuplicates: true,
  });

  await prisma.robot.createMany({
    data: robots,
    skipDuplicates: true,
  });

  await prisma.competitionRegistration.createMany({
    data: competitionRegistrations,
    skipDuplicates: true,
  });

  await prisma.evaluation.createMany({
    data: evaluations,
    skipDuplicates: true,
  });

  await prisma.evaluationCriterion.createMany({
    data: evaluationCriterions,
    skipDuplicates: true,
  });

  await prisma.userOnEvaluation.createMany({
    data: userOnEvaluations,
    skipDuplicates: true,
  });

  await prisma.competitionNote.createMany({
    data: competitionNotes,
    skipDuplicates: true,
  });

  await prisma.logistic.createMany({
    data: logistics,
    skipDuplicates: true,
  });

  await prisma.logisticTask.createMany({
    data: logisticTasks,
    skipDuplicates: true,
  });

  await prisma.userOnLogistic.createMany({
    data: userOnLogistics,
    skipDuplicates: true,
  });

  await prisma.participationOrder.createMany({
    data: participationOrder,
    skipDuplicates: true,
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(0);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
