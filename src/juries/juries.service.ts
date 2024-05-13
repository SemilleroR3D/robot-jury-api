import { Injectable } from '@nestjs/common';
import { CreateJuryDto } from './dto/create-jury.dto';
import { UpdateJuryDto } from './dto/update-jury.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JuriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createJuryDto: CreateJuryDto) {
    return this.prisma.userOnEvaluation.create({ data: createJuryDto });
  }

  async findAll() {
    const userOnEvaluation = await this.prisma.userOnEvaluation.findMany({
      include: {
        user: true,
      },
    });

    const users = userOnEvaluation.map(({ user, status }) => ({
      user,
      status,
    }));

    return users;
  }

  findOne(id: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
      include: {
        evaluations: {
          where: { status: true },
          include: { evaluation: { include: { evaluationCriterions: true } } },
        },
      },
    });
  }

  update(id: string, updateJuryDto: UpdateJuryDto) {
    return this.prisma.userOnEvaluation.update({
      where: {
        evaluationId_userId: {
          evaluationId: updateJuryDto.evaluationId,
          userId: id,
        },
      },
      data: { status: false },
    });
  }
}
