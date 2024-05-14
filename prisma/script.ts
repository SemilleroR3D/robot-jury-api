import { Sex } from '@prisma/client';

export const userTypes = [
  {
    id: '0fa133e6-f19d-4c0d-9c14-7cc3ed58d0c3',
    name: 'Admin',
    description: 'Administrador del sistema.',
  },
  {
    id: 'ebcc5664-6d58-4db7-b827-1daed0ac9c59',
    name: 'Jury',
    description: 'Evaluador de la competencia.',
  },
];

export const users = [
  {
    id: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    firstName: 'Dairo',
    lastName: 'Garcia Naranjo',
    birthDate: '1994-04-25T05:00:00.000Z',
    sex: Sex.Male,
    phone: '3027485520',
    email: 'garcianaranjodairo@gmail.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '616680df-a5b4-4a7a-8cfe-98ea2fb92e7b',
    firstName: 'Angie',
    lastName: 'Perez',
    birthDate: '1994-04-25T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3037485520',
    email: 'angieperez@gmail.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
];

export const userOnUserTypes = [
  {
    userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    userTypeId: '0fa133e6-f19d-4c0d-9c14-7cc3ed58d0c3',
  },
  {
    userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    userTypeId: 'ebcc5664-6d58-4db7-b827-1daed0ac9c59',
  },
  {
    userId: '616680df-a5b4-4a7a-8cfe-98ea2fb92e7b',
    userTypeId: 'ebcc5664-6d58-4db7-b827-1daed0ac9c59',
  },
];

export const competitions = [
  {
    id: '156a4e7b-b6cf-43d4-aefa-1bc2bc9e6b94',
    name: 'Desafio Monumentos Turisticos',
    description: 'Desafio Monumentos Turisticos',
    place: 'Concha Acustica',
    startDate: '2024-05-25T05:00:00.000Z',
    registerDeadline: '2024-05-25T05:00:00.000Z',
    deadlineUpdate: '2024-05-25T05:00:00.000Z',
  },
];

export const categories = [
  {
    id: 1,
    name: 'Principiantes',
    description: 'Como es que es.',
    competitionId: '156a4e7b-b6cf-43d4-aefa-1bc2bc9e6b94',
  },
];

export const rules = [
  {
    id: 1,
    name: 'Uso de sensores',
    description: 'No se pueden usar sensores',
    categoryId: 1,
  },
];

export const banners = [
  {
    id: 1,
    url: 'https://web.whatsapp.com/',
    competitionId: '156a4e7b-b6cf-43d4-aefa-1bc2bc9e6b94',
  },
];

export const teams = [
  {
    id: 1,
    name: 'Terminator',
    img: 'https://www.uuidgenerator.net/',
    video: 'https://www.youtube.com/watch?v=BdNqW63ZaB0&t=26805s',
  },
];

export const userOnTeams = [
  {
    userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    teamId: 1,
  },
  {
    userId: '616680df-a5b4-4a7a-8cfe-98ea2fb92e7b',
    teamId: 1,
  },
];

export const robots = [
  {
    id: 'a94a4b21-a0e5-4103-9efd-86cad84ff26a',
    name: 'T800',
    description: 'Matraca a todos',
    img: 'https://www.youtube.com/',
    connectionDiagram: 'https://www.youtube.com/',
    robotProgramming: 'https://www.youtube.com/',
  },
];

export const competitionRegistrations = [
  {
    id: '481a8b36-eb18-4089-8053-02647967e2b9',
    img: 'https://www.uuidgenerator.net/',
    total: 0,
    categoryId: 1,
    teamId: 1,
    robotId: 'a94a4b21-a0e5-4103-9efd-86cad84ff26a',
  },
];

export const evaluations = [
  {
    id: '1e41462f-84f4-4c83-9852-c2d7cf355e4f',
    name: 'Trayectoria',
    description: 'Se evalua el desenpeño del robot al pasar la pista',
    percent: 50,
    categoryId: 1,
  },
  {
    id: '4bcd20ea-4740-461b-b3fa-850b65f67670',
    name: 'Estetica',
    description: 'Se evalua la presentacion del equipo',
    percent: 50,
    categoryId: 1,
  },
];

export const evaluationCriterions = [
  {
    id: 1,
    name: 'Rapidez',
    percent: 30,
    evaluationId: '1e41462f-84f4-4c83-9852-c2d7cf355e4f',
  },
  {
    id: 2,
    name: 'Estrelladas',
    percent: 30,
    evaluationId: '1e41462f-84f4-4c83-9852-c2d7cf355e4f',
  },
  {
    id: 3,
    name: 'Cual',
    percent: 40,
    evaluationId: '1e41462f-84f4-4c83-9852-c2d7cf355e4f',
  },
  {
    id: 4,
    name: 'Presenta',
    percent: 50,
    evaluationId: '4bcd20ea-4740-461b-b3fa-850b65f67670',
  },
  {
    id: 5,
    name: 'Folclor',
    percent: 50,
    evaluationId: '4bcd20ea-4740-461b-b3fa-850b65f67670',
  },
];

export const userOnEvaluations = [
  {
    userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    evaluationId: '1e41462f-84f4-4c83-9852-c2d7cf355e4f',
  },
  {
    userId: '616680df-a5b4-4a7a-8cfe-98ea2fb92e7b',
    evaluationId: '1e41462f-84f4-4c83-9852-c2d7cf355e4f',
  },
];

export const competitionNotes = [
  {
    note: 30,
    evaluationCriterionId: 1,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 50,
    evaluationCriterionId: 2,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 30,
    evaluationCriterionId: 3,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 50,
    evaluationCriterionId: 4,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 50,
    evaluationCriterionId: 5,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
];

export const logistics = [
  {
    id: 1,
    name: 'Aseo',
    description: 'Hacer aseo',
    competitionId: '156a4e7b-b6cf-43d4-aefa-1bc2bc9e6b94',
  },
];

export const logisticTasks = [
  {
    id: 1,
    name: 'Barrer',
    description: 'Barrer',
    logisticId: 1,
  },
];

export const userOnLogistics = [
  { userId: '616680df-a5b4-4a7a-8cfe-98ea2fb92e7b', logisticId: 1 },
];
