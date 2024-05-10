import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
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
  video: string;
}
