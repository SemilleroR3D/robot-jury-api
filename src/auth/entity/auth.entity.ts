import { ApiProperty } from '@nestjs/swagger';
import { UsertypeEntity } from 'src/usertypes/entities/usertype.entity';

export class AuthEntity {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  rol: UsertypeEntity;

  @ApiProperty()
  accessToken: string;
}
