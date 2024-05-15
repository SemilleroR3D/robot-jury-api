import { ApiProperty } from '@nestjs/swagger';
import { ParticipationOrder } from '@prisma/client';

export class PositionEntity implements ParticipationOrder {
  @ApiProperty()
  try: number;

  @ApiProperty()
  id: number;

  @ApiProperty()
  isRunning: boolean;

  @ApiProperty()
  place: number;

  @ApiProperty()
  competitionRegistrationId: string;
}
