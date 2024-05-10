import { ApiProperty } from '@nestjs/swagger';
import { Banner } from '@prisma/client';

export class BannerEntity implements Banner {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  competitionId: string;
}
