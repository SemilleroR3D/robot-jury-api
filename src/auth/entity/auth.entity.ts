import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  accessToken: string;
}
