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
      select: {
        id: true,
        name: true,
        startDate: true,
        description: true,
        banners: {
          select: { url: true },
        },
        categories: {
          select: {
            id: true,
            name: true,
            description: true,
            competitionRegistrations: {
              where: { status: StatusCompetitionRegister.INSCRIBED },
              select: {
                id: true,
                total: true,
                notes: {
                  select: {
                    note: true,
                    evaluationCriterion: {
                      select: {
                        evaluationId: true,
                        id: true,
                        name: true,
                        percent: true,
                        evaluation: {
                          select: { name: true, percent: true, id: true },
                        },
                      },
                    },
                  },
                },
                robot: { select: { id: true, name: true } },
                participationOrder: {
                  select: { id: true, try: true, place: true, isRunning: true },
                },
              },
            },
          },
        },
      },
    });
  }
}
