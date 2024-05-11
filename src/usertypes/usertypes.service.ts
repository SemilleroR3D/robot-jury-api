import { Injectable } from '@nestjs/common';
import { CreateUsertypeDto } from './dto/create-usertype.dto';
import { UpdateUsertypeDto } from './dto/update-usertype.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserDto } from './dto/add-user.dto';

@Injectable()
export class UsertypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUsertypeDto: CreateUsertypeDto) {
    return this.prisma.userType.create({ data: createUsertypeDto });
  }

  addUser(addUserDto: AddUserDto) {
    return this.prisma.userOnUserType.create({ data: addUserDto });
  }

  findAll() {
    return this.prisma.userType.findMany({});
  }

  async findOne(id: string) {
    const userType = await this.prisma.userType.findUniqueOrThrow({
      where: { id },
      include: { users: { include: { user: true } } },
    });

    const users = userType.users.map(({ user }) => user);

    return { ...userType, users };
  }

  update(id: string, updateUsertypeDto: UpdateUsertypeDto) {
    return this.prisma.userType.update({
      where: { id },
      data: updateUsertypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.userType.delete({ where: { id } });
  }
}
