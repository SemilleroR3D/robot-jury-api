import { ApiProperty } from '@nestjs/swagger';
import {
  $Enums,
  CompetitionNote,
  CompetitionRegistration,
} from '@prisma/client';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { EvaluationcriterionEntity } from 'src/evaluationcriterions/entities/evaluationcriterion.entity';
import { RobotEntity } from 'src/robots/entities/robot.entity';
import { TeamEntity } from 'src/teams/entities/team.entity';

export class CompetitionNoteEntity implements CompetitionNote {
  @ApiProperty()
  note: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  evaluationCriterionId: number;

  @ApiProperty()
  evaluationCriterion: EvaluationcriterionEntity;

  @ApiProperty()
  competitionRegistrationId: string;
}

export class BoardEntity implements CompetitionRegistration {
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

  @ApiProperty()
  robotId: string;

  @ApiProperty({ isArray: true })
  notes: CompetitionNoteEntity;

  @ApiProperty()
  team: TeamEntity;

  @ApiProperty()
  category: CategoryEntity;

  @ApiProperty()
  robot: RobotEntity;
}
