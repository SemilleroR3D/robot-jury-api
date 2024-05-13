import { Module } from '@nestjs/common';
import { JuriesService } from './juries.service';
import { JuriesController } from './juries.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [JuriesController],
  providers: [JuriesService],
  imports: [PrismaModule],
})
export class JuriesModule {}
