import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateRobotDto {
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
  @IsUrl()
  @ApiProperty()
  img: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  connectionDiagram: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  robotProgramming: string;

  @IsBoolean()
  @ApiProperty({ required: false, default: true })
  status: boolean = true;

  @IsString()
  @IsDate()
  @ApiProperty()
  registerDate: Date;
}
