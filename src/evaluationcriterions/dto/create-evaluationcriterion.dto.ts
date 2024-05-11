import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateEvaluationcriterionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  percent: number;

  @IsBoolean()
  @ApiProperty({ required: false, default: true })
  status: boolean;

  @IsString()
  @IsUUID()
  @ApiProperty()
  evaluationId: string;
}
