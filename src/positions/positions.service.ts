import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PositionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPositionDto: CreatePositionDto) {
    return this.prisma.participationOrder.create({
      data: createPositionDto,
    });
  }

  findAll() {
    return this.prisma.participationOrder.findMany({});
  }

  findOne(id: number) {
    return this.prisma.participationOrder.findUniqueOrThrow({
      where: { id },
      include: { competitionRegistration: true },
    });
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return this.prisma.participationOrder.update({
      where: { id },
      data: updatePositionDto,
    });
  }

  remove(id: number) {
    return this.prisma.participationOrder.delete({ where: { id } });
  }
}
