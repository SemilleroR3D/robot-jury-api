import { Injectable } from '@nestjs/common';
import { CreateEvaluationcriterionDto } from './dto/create-evaluationcriterion.dto';
import { UpdateEvaluationcriterionDto } from './dto/update-evaluationcriterion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EvaluationcriterionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEvaluationcriterionDto: CreateEvaluationcriterionDto) {
    return this.prisma.evaluationCriterion.create({
      data: createEvaluationcriterionDto,
    });
  }

  findAll() {
    return this.prisma.evaluationCriterion.findMany({});
  }

  findOne(id: number) {
    return this.prisma.evaluationCriterion.findUniqueOrThrow({ where: { id } });
  }

  update(
    id: number,
    updateEvaluationcriterionDto: UpdateEvaluationcriterionDto,
  ) {
    return this.prisma.evaluationCriterion.update({
      where: { id },
      data: updateEvaluationcriterionDto,
    });
  }

  remove(id: number) {
    return this.prisma.evaluationCriterion.update({
      where: { id },
      data: { status: false },
    });
  }
}
