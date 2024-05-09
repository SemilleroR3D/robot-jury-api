import { Sex } from '@prisma/client';

export const userType = [
  {
    id: '0fa133e6-f19d-4c0d-9c14-7cc3ed58d0c3',
    name: 'Admin',
    description: 'Administrador del sistema.',
  },
];

export const user = [
  {
    id: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    firstName: 'Dairo',
    lastName: 'Garcia Naranjo',
    birthDate: '1994-04-25T05:00:00.000Z',
    sex: Sex.Male,
    phone: '3027485520',
    email: 'garcianaranjodairo@gmail.com',
    password: '123456',
    userTypeId: '0fa133e6-f19d-4c0d-9c14-7cc3ed58d0c3',
  },
];
