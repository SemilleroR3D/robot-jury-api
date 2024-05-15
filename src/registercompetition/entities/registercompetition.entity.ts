import { ApiProperty } from '@nestjs/swagger';
import { $Enums, CompetitionRegistration } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { RobotEntity } from 'src/robots/entities/robot.entity';
import { TeamEntity } from 'src/teams/entities/team.entity';

export class RegistercompetitionEntity implements CompetitionRegistration {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: $Enums.StatusCompetitionRegister;

  @ApiProperty()
  registerDate: Date;

  @ApiProperty()
  img: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  teamId: number;

  @ApiProperty({ required: false })
  robotId: string;

  @ApiProperty()
  category: CategoryEntity;

  @ApiProperty()
  team: TeamEntity;

  @ApiProperty()
  robot: RobotEntity;
}
