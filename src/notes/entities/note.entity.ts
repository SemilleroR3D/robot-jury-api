import { ApiProperty } from '@nestjs/swagger';
import { CompetitionNote } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class NoteEntity implements CompetitionNote {
  constructor(partial: Partial<NoteEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  note: number;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @ApiProperty()
  evaluationCriterionId: number;

  @ApiProperty()
  competitionRegistrationId: string;
}
