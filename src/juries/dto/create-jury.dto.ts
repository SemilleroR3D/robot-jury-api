import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateJuryDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  evaluationId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  userId: string;

  @IsDateString()
  @ApiProperty({ required: false })
  date: Date;

  @ApiProperty({ required: false, default: true })
  status: boolean = true;
}
