import { ApiProperty } from '@nestjs/swagger';
import { Competition } from '@prisma/client';
import { BannerEntity } from './banner.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';

export class CompetitionEntity implements Competition {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  place: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  registerDeadline: Date;

  @ApiProperty()
  deadlineUpdate: Date;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  banners: BannerEntity[];

  @ApiProperty()
  categories: CategoryEntity[];
}
