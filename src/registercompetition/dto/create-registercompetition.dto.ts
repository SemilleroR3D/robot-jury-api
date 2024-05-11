import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateRegistercompetitionDto {
  @ApiProperty({
    required: false,
    default: $Enums.StatusCompetitionRegister.REGISTERED,
  })
  status: $Enums.StatusCompetitionRegister;

  @IsString()
  @IsDate()
  @ApiProperty()
  registerDate: Date;

  @IsString()
  @IsUrl()
  @ApiProperty()
  img: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({ required: false })
  total: number;

  @IsNumber()
  @ApiProperty()
  categoryId: number;

  @IsNumber()
  @ApiProperty()
  teamId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  robotId: string;
}
