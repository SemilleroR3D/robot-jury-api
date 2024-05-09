import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        userType: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        `No se encontró ningún usuario con este "${email}" correo electrónico`,
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña inválida.');
    }

    const { firstName, lastName } = user;

    return {
      firstName,
      lastName,
      email: user.email,
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
