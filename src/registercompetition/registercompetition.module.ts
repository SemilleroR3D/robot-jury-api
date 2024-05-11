import { Module } from '@nestjs/common';
import { RegistercompetitionService } from './registercompetition.service';
import { RegistercompetitionController } from './registercompetition.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RegistercompetitionController],
  providers: [RegistercompetitionService],
  imports: [PrismaModule],
})
export class RegistercompetitionModule {}
