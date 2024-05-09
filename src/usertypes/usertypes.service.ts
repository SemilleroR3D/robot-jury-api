import { Injectable } from '@nestjs/common';
import { CreateUsertypeDto } from './dto/create-usertype.dto';
import { UpdateUsertypeDto } from './dto/update-usertype.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsertypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUsertypeDto: CreateUsertypeDto) {
    return this.prisma.userType.create({ data: createUsertypeDto });
  }

  findAll() {
    return this.prisma.userType.findMany({});
  }

  findOne(id: string) {
    return this.prisma.userType.findUniqueOrThrow({
      where: { id },
      include: { users: true },
    });
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
