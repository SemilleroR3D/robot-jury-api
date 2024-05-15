import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const competitionRegistrations =
      await this.prisma.competitionRegistration.findMany({
        include: {
          notes: { include: { evaluationCriterion: true } },
          team: true,
          category: true,
          robot: true,
        },
      });

    return competitionRegistrations;
  }
}
