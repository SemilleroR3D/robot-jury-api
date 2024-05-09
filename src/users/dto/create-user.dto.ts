import { ApiProperty } from '@nestjs/swagger';
import { Sex } from '@prisma/client';
import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsDateString()
  @ApiProperty()
  birthDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ enum: Sex })
  sex: Sex;

  @IsString()
  @IsAlphanumeric()
  @Length(10)
  @ApiProperty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ required: false })
  userTypeId: string;
}
