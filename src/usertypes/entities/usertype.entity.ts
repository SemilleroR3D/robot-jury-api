import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class UsertypeEntity implements UserType {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty({ isArray: true })
  users?: UserEntity[];

  constructor({ users, ...data }: Partial<UsertypeEntity>) {
    Object.assign(this, data);

    if (users.length != 0) {
      this.users = users.map((user) => new UserEntity(user));
    }
  }
}
