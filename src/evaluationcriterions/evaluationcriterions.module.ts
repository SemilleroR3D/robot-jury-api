import { Module } from '@nestjs/common';
import { EvaluationcriterionsService } from './evaluationcriterions.service';
import { EvaluationcriterionsController } from './evaluationcriterions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EvaluationcriterionsController],
  providers: [EvaluationcriterionsService],
  imports: [PrismaModule],
})
export class EvaluationcriterionsModule {}
