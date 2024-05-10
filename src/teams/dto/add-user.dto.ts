import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  @ApiProperty()
  usersId: string[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  teamId: number;
}
