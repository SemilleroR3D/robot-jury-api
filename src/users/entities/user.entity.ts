import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { UsertypeEntity } from 'src/usertypes/entities/usertype.entity';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  sex: $Enums.Sex;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({ isArray: true })
  userTypes?: UsertypeEntity[];
}
