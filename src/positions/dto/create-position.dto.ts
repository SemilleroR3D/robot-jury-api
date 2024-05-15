import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePositionDto {
  @IsBoolean()
  @ApiProperty()
  isRunning: boolean;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  place: number;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  competitionRegistrationId: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  try: number;
}
