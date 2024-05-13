import { ApiProperty } from '@nestjs/swagger';
import { UserOnEvaluation } from '@prisma/client';

export class UserOnEvaluationEntity implements UserOnEvaluation {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  evaluationId: string;

  @ApiProperty()
  userId: string;
}
