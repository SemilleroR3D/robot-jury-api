import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserDto } from './dto/add-user.dto';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTeamDto: CreateTeamDto) {
    return this.prisma.team.create({
      data: createTeamDto,
    });
  }

  findAll() {
    return this.prisma.team.findMany({});
  }

  findOne(id: number) {
    return this.prisma.team.findUniqueOrThrow({ where: { id } });
  }

  async addUsers(addUserDto: AddUserDto) {
    const { usersId, teamId } = addUserDto;

    await this.prisma.usersOnTeams.createMany({
      data: usersId.map((userId) => ({ userId, teamId })),
      skipDuplicates: true,
    });

    return this.prisma.team.findUniqueOrThrow({
      where: { id: teamId },
      include: {
        users: { select: { userId: true, registerDate: true } },
      },
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.prisma.team.update({
      where: { id },
      data: updateTeamDto,
    });
  }

  remove(id: number) {
    return this.prisma.team.update({ where: { id }, data: { status: false } });
  }
}
