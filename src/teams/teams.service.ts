import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserTeamDto } from './dto/add-team-user.dto';

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

  async addUsers(addUserDto: AddUserTeamDto) {
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

  async findTeamUser(id: string) {
    const userOnTeams = await this.prisma.usersOnTeams.findMany({
      where: { userId: id },
      include: { team: true },
    });

    return userOnTeams.map(({ team }) => team);
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
