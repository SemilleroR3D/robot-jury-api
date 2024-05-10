import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import { RuleEntity } from 'src/rules/entities/rule.entity';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  competitionId: string;

  @ApiProperty()
  rules: RuleEntity[];
}
