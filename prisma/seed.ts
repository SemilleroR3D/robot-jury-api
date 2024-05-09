import { PrismaClient } from '@prisma/client';
import { user, userType } from './script';

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
