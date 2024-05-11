import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEvaluationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  description: string;

  @IsBoolean()
  @ApiProperty({ required: false, default: true })
  status: boolean = true;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  percent: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  categoryId: number;
}
