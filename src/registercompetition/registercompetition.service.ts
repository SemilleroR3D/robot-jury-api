import { Injectable } from '@nestjs/common';
import { CreateRegistercompetitionDto } from './dto/create-registercompetition.dto';
import { UpdateRegistercompetitionDto } from './dto/update-registercompetition.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegistercompetitionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRegistercompetitionDto: CreateRegistercompetitionDto) {
    return this.prisma.competitionRegistration.create({
      data: createRegistercompetitionDto,
    });
  }

  findAll() {
    return this.prisma.competitionRegistration.findMany({});
  }

  findOne(id: string) {
    return this.prisma.competitionRegistration.findUniqueOrThrow({
      where: { id },
      include: { category: true, robot: true, team: true },
    });
  }

  update(
    id: string,
    updateRegistercompetitionDto: UpdateRegistercompetitionDto,
  ) {
    return this.prisma.competitionRegistration.update({
      where: { id },
      data: updateRegistercompetitionDto,
    });
  }

  remove(id: string) {
    return this.prisma.competitionRegistration.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }
}
