import { Sex, StatusCompetitionRegister } from '@prisma/client';

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
    id: 'e1a3bc2f-4b2c-4f3d-b3b2-123e456789ab',
    firstName: 'Lina',
    lastName: 'Martinez Rios',
    birthDate: '1987-08-12T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3102458796',
    email: 'lina.martinezrios@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: 'b2c4d5e6-f7a8-4b2c-d3f4-567e8910bcde',
    firstName: 'Carlos',
    lastName: 'Vega Perez',
    birthDate: '1991-03-05T05:00:00.000Z',
    sex: Sex.Male,
    phone: '3125649875',
    email: 'carlos.vega.perez@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '3c4d5e6f-789a-4b2c-d5e6-123f7890bcde',
    firstName: 'Andrea',
    lastName: 'Ramirez Diaz',
    birthDate: '1996-11-22T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3147859632',
    email: 'andrea.ramirez.diaz@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '4d5e6f7a-8b9c-4d2e-b5c6-7890abcdef12',
    firstName: 'Javier',
    lastName: 'Lopez Salazar',
    birthDate: '1989-07-14T05:00:00.000Z',
    sex: Sex.Male,
    phone: '3168741258',
    email: 'javier.lopez.salazar@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '5e6f7a8b-9c0d-4e2b-c3d4-5e67890abcdef',
    firstName: 'Mariana',
    lastName: 'Gomez Pardo',
    birthDate: '1993-05-19T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3196548723',
    email: 'mariana.gomez.pardo@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '7a8f9b2c-d3e4-4f5a-b6c7-8d9e0f1a2b3c',
    firstName: 'Sofia',
    lastName: 'Castillo Torres',
    birthDate: '1995-01-15T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3206587412',
    email: 'sofia.castillo.torres@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '8b9c0d1e-2f3a-4b5c-d6e7-8f9a0b1c2d3e',
    firstName: 'Mateo',
    lastName: 'Diaz Ruiz',
    birthDate: '1988-09-23T05:00:00.000Z',
    sex: Sex.Male,
    phone: '3114579632',
    email: 'mateo.diaz.ruiz@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '9c0d1e2f-3a4b-4c5d-b6e7-8f9a0b1c2d3e',
    firstName: 'Valeria',
    lastName: 'Gutierrez Sanchez',
    birthDate: '1992-11-11T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3227894561',
    email: 'valeria.gutierrez.sanchez@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a',
    firstName: 'Fernando',
    lastName: 'Mendoza Vargas',
    birthDate: '1984-06-30T05:00:00.000Z',
    sex: Sex.Male,
    phone: '3138795641',
    email: 'fernando.mendoza.vargas@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
  {
    id: '1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b',
    firstName: 'Isabella',
    lastName: 'Rojas Lopez',
    birthDate: '1990-04-02T05:00:00.000Z',
    sex: Sex.Female,
    phone: '3174567821',
    email: 'isabella.rojas.lopez@example.com',
    password: '$2a$10$IYu/hAYY6BgsrzsBVaLpVe81e4SRMswLHu0s4EVzKKSukwYP8mdem',
  },
];

export const userOnUserTypes = [
  {
    userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    userTypeId: '0fa133e6-f19d-4c0d-9c14-7cc3ed58d0c3',
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
  {
    id: 2,
    name: 'Cyberdyne',
    img: 'https://www.uuidgenerator.net/',
    video: 'https://www.youtube.com/watch?v=BdNqW63ZaB0&t=26805s',
  },
  {
    id: 3,
    name: 'Skynet',
    img: 'https://www.uuidgenerator.net/',
    video: 'https://www.youtube.com/watch?v=BdNqW63ZaB0&t=26805s',
  },
  {
    id: 4,
    name: 'Resistance',
    img: 'https://www.uuidgenerator.net/',
    video: 'https://www.youtube.com/watch?v=BdNqW63ZaB0&t=26805s',
  },
  {
    id: 5,
    name: 'Judgment Day',
    img: 'https://www.uuidgenerator.net/',
    video: 'https://www.youtube.com/watch?v=BdNqW63ZaB0&t=26805s',
  },
  {
    id: 6,
    name: 'Genesis',
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
    userId: 'e1a3bc2f-4b2c-4f3d-b3b2-123e456789ab',
    teamId: 1,
  },
  {
    userId: 'b2c4d5e6-f7a8-4b2c-d3f4-567e8910bcde',
    teamId: 2,
  },
  {
    userId: '3c4d5e6f-789a-4b2c-d5e6-123f7890bcde',
    teamId: 2,
  },
  {
    userId: '4d5e6f7a-8b9c-4d2e-b5c6-7890abcdef12',
    teamId: 3,
  },
  {
    userId: '5e6f7a8b-9c0d-4e2b-c3d4-5e67890abcdef',
    teamId: 3,
  },
  {
    userId: '7a8f9b2c-d3e4-4f5a-b6c7-8d9e0f1a2b3c',
    teamId: 4,
  },
  {
    userId: '8b9c0d1e-2f3a-4b5c-d6e7-8f9a0b1c2d3e',
    teamId: 4,
  },
  {
    userId: '9c0d1e2f-3a4b-4c5d-b6e7-8f9a0b1c2d3e',
    teamId: 5,
  },
  {
    userId: '0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a',
    teamId: 5,
  },
  {
    userId: '1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b',
    teamId: 6,
  },
  {
    userId: '5e6f7a8b-9c0d-4e2b-c3d4-5e67890abcdef',
    teamId: 6,
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
  {
    id: 'b95b5b32-b0f6-4204-8efd-97cad85ff37b',
    name: 'T1000',
    description: 'Líquido letal',
    img: 'https://www.youtube.com/',
    connectionDiagram: 'https://www.youtube.com/',
    robotProgramming: 'https://www.youtube.com/',
  },
  {
    id: 'c96c6c43-c1g7-4315-9gfd-a8dae86ff48c',
    name: 'T2000',
    description: 'Evolución suprema',
    img: 'https://www.youtube.com/',
    connectionDiagram: 'https://www.youtube.com/',
    robotProgramming: 'https://www.youtube.com/',
  },
  {
    id: 'd97d7d54-d2h8-5426-1hge-b9ebf97ff59d',
    name: 'T3000',
    description: 'Resistencia avanzada',
    img: 'https://www.youtube.com/',
    connectionDiagram: 'https://www.youtube.com/',
    robotProgramming: 'https://www.youtube.com/',
  },
  {
    id: 'e98e8e65-e3i9-6537-2ife-c1fcf98ff60e',
    name: 'T4000',
    description: 'Juicio final',
    img: 'https://www.youtube.com/',
    connectionDiagram: 'https://www.youtube.com/',
    robotProgramming: 'https://www.youtube.com/',
  },
  {
    id: 'f09f9f76-f4j0-7648-3jgf-d2gdf09ff71f',
    name: 'T5000',
    description: 'Génesis',
    img: 'https://www.youtube.com/',
    connectionDiagram: 'https://www.youtube.com/',
    robotProgramming: 'https://www.youtube.com/',
  },
];

export const competitionRegistrations = [
  {
    id: '481a8b36-eb18-4089-8053-02647967e2b9',
    img: 'https://www.uuidgenerator.net/',
    status: StatusCompetitionRegister.INSCRIBED,
    total: 0,
    categoryId: 1,
    teamId: 1,
    robotId: 'a94a4b21-a0e5-4103-9efd-86cad84ff26a',
  },
  {
    id: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
    img: 'https://www.uuidgenerator.net/',
    status: StatusCompetitionRegister.INSCRIBED,
    total: 0,
    categoryId: 1,
    teamId: 2,
    robotId: 'b95b5b32-b0f6-4204-8efd-97cad85ff37b',
  },
  {
    id: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
    img: 'https://www.uuidgenerator.net/',
    status: StatusCompetitionRegister.INSCRIBED,
    total: 0,
    categoryId: 1,
    teamId: 3,
    robotId: 'c96c6c43-c1g7-4315-9gfd-a8dae86ff48c',
  },
  {
    id: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
    img: 'https://www.uuidgenerator.net/',
    status: StatusCompetitionRegister.INSCRIBED,
    total: 0,
    categoryId: 1,
    teamId: 4,
    robotId: 'd97d7d54-d2h8-5426-1hge-b9ebf97ff59d',
  },
  {
    id: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
    img: 'https://www.uuidgenerator.net/',
    status: StatusCompetitionRegister.INSCRIBED,
    total: 0,
    categoryId: 1,
    teamId: 5,
    robotId: 'e98e8e65-e3i9-6537-2ife-c1fcf98ff60e',
  },
  {
    id: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
    img: 'https://www.uuidgenerator.net/',
    status: StatusCompetitionRegister.INSCRIBED,
    total: 0,
    categoryId: 1,
    teamId: 6,
    robotId: 'f09f9f76-f4j0-7648-3jgf-d2gdf09ff71f',
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
    userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c',
    evaluationId: '4bcd20ea-4740-461b-b3fa-850b65f67670',
  },
];

export const competitionNotes = [
  {
    note: 30,
    evaluationCriterionId: 1,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 45,
    evaluationCriterionId: 2,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 35,
    evaluationCriterionId: 3,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 25,
    evaluationCriterionId: 4,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 40,
    evaluationCriterionId: 5,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    note: 40,
    evaluationCriterionId: 1,
    competitionRegistrationId: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
  },
  {
    note: 35,
    evaluationCriterionId: 2,
    competitionRegistrationId: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
  },
  {
    note: 50,
    evaluationCriterionId: 3,
    competitionRegistrationId: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
  },
  {
    note: 30,
    evaluationCriterionId: 4,
    competitionRegistrationId: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
  },
  {
    note: 45,
    evaluationCriterionId: 5,
    competitionRegistrationId: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
  },
  {
    note: 25,
    evaluationCriterionId: 1,
    competitionRegistrationId: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
  },
  {
    note: 30,
    evaluationCriterionId: 2,
    competitionRegistrationId: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
  },
  {
    note: 40,
    evaluationCriterionId: 3,
    competitionRegistrationId: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
  },
  {
    note: 35,
    evaluationCriterionId: 4,
    competitionRegistrationId: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
  },
  {
    note: 20,
    evaluationCriterionId: 5,
    competitionRegistrationId: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
  },
  {
    note: 20,
    evaluationCriterionId: 1,
    competitionRegistrationId: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
  },
  {
    note: 25,
    evaluationCriterionId: 2,
    competitionRegistrationId: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
  },
  {
    note: 45,
    evaluationCriterionId: 3,
    competitionRegistrationId: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
  },
  {
    note: 30,
    evaluationCriterionId: 4,
    competitionRegistrationId: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
  },
  {
    note: 35,
    evaluationCriterionId: 5,
    competitionRegistrationId: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
  },
  {
    note: 50,
    evaluationCriterionId: 1,
    competitionRegistrationId: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
  },
  {
    note: 40,
    evaluationCriterionId: 2,
    competitionRegistrationId: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
  },
  {
    note: 30,
    evaluationCriterionId: 3,
    competitionRegistrationId: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
  },
  {
    note: 45,
    evaluationCriterionId: 4,
    competitionRegistrationId: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
  },
  {
    note: 25,
    evaluationCriterionId: 5,
    competitionRegistrationId: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
  },
  {
    note: 35,
    evaluationCriterionId: 1,
    competitionRegistrationId: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
  },
  {
    note: 45,
    evaluationCriterionId: 2,
    competitionRegistrationId: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
  },
  {
    note: 25,
    evaluationCriterionId: 3,
    competitionRegistrationId: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
  },
  {
    note: 30,
    evaluationCriterionId: 4,
    competitionRegistrationId: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
  },
  {
    note: 40,
    evaluationCriterionId: 5,
    competitionRegistrationId: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
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
  { userId: '7f54c29f-a6f4-4c61-99ac-2b3200c6a78c', logisticId: 1 },
];

export const participationOrder = [
  {
    id: 1,
    isRunning: false,
    place: 1,
    try: 2,
    competitionRegistrationId: '481a8b36-eb18-4089-8053-02647967e2b9',
  },
  {
    id: 2,
    isRunning: false,
    place: 2,
    try: 1,
    competitionRegistrationId: '582b9c47-fc29-4a8e-8fb2-12647968e3c9',
  },
  {
    id: 3,
    isRunning: false,
    place: 3,
    try: 3,
    competitionRegistrationId: '693c0d58-gd3a-4b9e-9fb3-23647969e4da',
  },
  {
    id: 4,
    isRunning: false,
    place: 4,
    try: 1,
    competitionRegistrationId: '7a4d1e69-he4b-5c1f-1gb4-34647970e5eb',
  },
  {
    id: 5,
    isRunning: false,
    place: 5,
    try: 2,
    competitionRegistrationId: '8b5e2f7a-if5c-6d2g-2hc5-45647971e6fc',
  },
  {
    id: 6,
    isRunning: false,
    place: 6,
    try: 3,
    competitionRegistrationId: '9c6f3g8b-jg6d-7e3h-3id6-56747972f7gd',
  },
];
