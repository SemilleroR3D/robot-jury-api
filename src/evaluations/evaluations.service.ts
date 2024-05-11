import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EvaluationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEvaluationDto: CreateEvaluationDto) {
    return this.prisma.evaluation.create({ data: createEvaluationDto });
  }

  findAll() {
    return this.prisma.evaluation.findMany({});
  }

  findOne(id: string) {
    return this.prisma.evaluation.findUniqueOrThrow({
      where: { id },
      include: { evaluationCriterions: true },
    });
  }

  update(id: string, updateEvaluationDto: UpdateEvaluationDto) {
    return this.prisma.evaluation.update({
      where: { id },
      data: updateEvaluationDto,
    });
  }

  remove(id: string) {
    return this.prisma.evaluation.update({
      where: { id },
      data: { status: false },
    });
  }
}
