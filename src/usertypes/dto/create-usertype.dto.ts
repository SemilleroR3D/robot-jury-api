import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUsertypeDto {
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
  @IsNotEmpty()
  @ApiProperty({ required: false, default: true })
  status: boolean = true;
}
