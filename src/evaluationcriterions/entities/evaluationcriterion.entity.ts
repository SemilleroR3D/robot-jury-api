import { ApiProperty } from '@nestjs/swagger';
import { EvaluationCriterion } from '@prisma/client';

export class EvaluationcriterionEntity implements EvaluationCriterion {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  percent: number;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  evaluationId: string;
}
