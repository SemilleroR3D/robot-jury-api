import { ApiProperty } from '@nestjs/swagger';
import { UserOnUserType } from '@prisma/client';

export class UserOnUserTypeEntity implements UserOnUserType {
  @ApiProperty()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  userTypeId: string;

  @ApiProperty()
  userId: string;
}
