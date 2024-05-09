import { Module } from '@nestjs/common';
import { UsertypesService } from './usertypes.service';
import { UsertypesController } from './usertypes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsertypesController],
  providers: [UsertypesService],
  imports: [PrismaModule],
})
export class UsertypesModule {}
