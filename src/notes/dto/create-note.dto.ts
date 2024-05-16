import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateNoteDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  note: number;

  @IsNumber()
  @ApiProperty()
  evaluationCriterionId: number;

  @IsString()
  @IsUUID()
  @ApiProperty()
  competitionRegistrationId: string;
}
