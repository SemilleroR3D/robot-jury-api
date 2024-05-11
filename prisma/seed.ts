import { PrismaClient } from '@prisma/client';
import { user, userOnUserType, userType } from './script';

const prisma = new PrismaClient();

const main = async () => {
  const userTypes = await prisma.userType.createMany({
    data: userType,
    skipDuplicates: true,
  });

  const users = await prisma.user.createMany({
    data: user,
    skipDuplicates: true,
  });

  await prisma.userOnUserType.createMany({
    data: userOnUserType,
    skipDuplicates: true,
  });

  console.log({ userTypes, users });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(0);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
