import { Injectable } from '@nestjs/common';
import { StatusCompetitionRegister } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

  async findPositions(id: string) {
    return this.prisma.competition.findFirstOrThrow({
      where: { id },
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
  }

  async findBoard(id: string) {
    return this.prisma.competition.findFirstOrThrow({
      where: { id },
      include: {
        categories: {
          include: {
            competitionRegistrations: {
              where: { status: StatusCompetitionRegister.INSCRIBED },
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
