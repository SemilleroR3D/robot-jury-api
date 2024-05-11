import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EvaluationsController],
  providers: [EvaluationsService],
  imports: [PrismaModule],
})
export class EvaluationsModule {}
