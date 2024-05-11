import { ApiProperty } from '@nestjs/swagger';
import { Evaluation } from '@prisma/client';
import { EvaluationcriterionEntity } from 'src/evaluationcriterions/entities/evaluationcriterion.entity';

export class EvaluationEntity implements Evaluation {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  percent: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  evaluationCriterions: EvaluationcriterionEntity[];
}
