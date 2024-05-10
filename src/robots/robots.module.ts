import { Module } from '@nestjs/common';
import { RobotsService } from './robots.service';
import { RobotsController } from './robots.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RobotsController],
  providers: [RobotsService],
  imports: [PrismaModule],
})
export class RobotsModule {}
