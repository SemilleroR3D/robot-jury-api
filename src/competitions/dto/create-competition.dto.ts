import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

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
  @IsDate()
  @ApiProperty()
  startDate: Date;

  @IsString()
  @IsDate()
  @ApiProperty()
  registerDeadline: Date;

  @IsString()
  @IsDate()
  @ApiProperty()
  deadlineUpdate: Date;

  @ApiProperty({ required: false, default: true })
  status: boolean = true;
}
