import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService],
  imports: [PrismaModule],
})
export class PositionsModule {}
