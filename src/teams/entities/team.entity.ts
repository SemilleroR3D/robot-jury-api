import { ApiProperty } from '@nestjs/swagger';
import { Team } from '@prisma/client';

export class TeamEntity implements Team {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  img: string;

  @ApiProperty()
  video: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  registerDate: Date;

  @ApiProperty({ isArray: true, required: false })
  users?: { userId: string; registerDate: Date }[];
}
