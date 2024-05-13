import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCompetitionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  place: string;

  @IsString()
  @IsDateString()
  @ApiProperty()
  startDate: Date;

  @IsString()
  @IsDateString()
  @ApiProperty()
  registerDeadline: Date;

  @IsString()
  @IsDateString()
  @ApiProperty()
  deadlineUpdate: Date;

  @ApiProperty({ required: false, default: true })
  status: boolean = true;
}
