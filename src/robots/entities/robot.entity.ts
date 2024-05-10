import { ApiProperty } from '@nestjs/swagger';
import { Robot } from '@prisma/client';

export class RobotEntity implements Robot {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  img: string;

  @ApiProperty()
  connectionDiagram: string;

  @ApiProperty()
  robotProgramming: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  registerDate: Date;
}
