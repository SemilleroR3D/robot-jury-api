import { Injectable } from '@nestjs/common';
import { StatusCompetitionRegister } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

  async findPositions() {
    const competition = await this.prisma.competition.findFirstOrThrow({
      where: { status: true },
      include: {
        categories: {
          include: {
            competitionRegistrations: {
              where: { status: StatusCompetitionRegister.INSCRIBED },
              include: { participationOrder: true, robot: true },
            },
          },
        },
      },
    });

    const competitionRegistrations = competition.categories.flatMap(
      (category) => category.competitionRegistrations,
    );

    return competitionRegistrations;
  }

  async findBoard() {
    return this.prisma.competition.findFirstOrThrow({
      where: { status: true },
      include: {
        categories: {
          include: {
            competitionRegistrations: {
              where: { status: StatusCompetitionRegister.REGISTERED },
              include: {
                notes: { include: { evaluationCriterion: true } },
                robot: true,
              },
            },
          },
        },
      },
    });
  }
}
