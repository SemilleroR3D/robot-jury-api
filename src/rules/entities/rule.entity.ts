import { ApiProperty } from '@nestjs/swagger';
import { Rule } from '@prisma/client';

export class RuleEntity implements Rule {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  categoryId: number;
}
