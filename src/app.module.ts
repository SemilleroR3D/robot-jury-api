import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UsertypesModule } from './usertypes/usertypes.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TeamsModule } from './teams/teams.module';
import { CompetitionsModule } from './competitions/competitions.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UsertypesModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TeamsModule,
    CompetitionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
