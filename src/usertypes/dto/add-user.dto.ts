import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class AddUserDto {
  @IsString()
  @IsUUID()
  @ApiProperty()
  userId: string;

  @IsString()
  @IsUUID()
  @ApiProperty()
  userTypeId: string;
}
