import { ConflictException, Injectable } from '@nestjs/common';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RobotsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRobotDto: CreateRobotDto) {
    const robot = await this.prisma.robot.findUnique({
      where: { name: createRobotDto.name },
    });

    if (!!robot) {
      throw new ConflictException('Este nombre ya está siendo utilizado.');
    }

    return this.prisma.robot.create({ data: createRobotDto });
  }

  findAll() {
    return this.prisma.robot.findMany({});
  }

  findOne(id: string) {
    return this.prisma.robot.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, updateRobotDto: UpdateRobotDto) {
    return this.prisma.robot.update({ where: { id }, data: updateRobotDto });
  }

  remove(id: string) {
    return this.prisma.robot.update({ where: { id }, data: { status: false } });
  }
}
