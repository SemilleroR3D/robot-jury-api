import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddBannerDto } from './dto/add-banner.dto';

@Injectable()
export class CompetitionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCompetitionDto: CreateCompetitionDto) {
    return this.prisma.competition.create({ data: createCompetitionDto });
  }

  async addBanner(addBannerDto: AddBannerDto) {
    const { urls, competitionId } = addBannerDto;

    await this.prisma.banner.createMany({
      data: urls.map((url) => ({ url, competitionId })),
    });

    return this.prisma.banner.findMany({ where: { competitionId } });
  }

  findAll() {
    return this.prisma.competition.findMany({ include: { banners: true } });
  }

  findOne(id: string) {
    return this.prisma.competition.findUniqueOrThrow({
      where: { id },
      include: { banners: true },
    });
  }

  update(id: string, updateCompetitionDto: UpdateCompetitionDto) {
    return this.prisma.competition.update({
      where: { id },
      data: updateCompetitionDto,
    });
  }

  remove(id: string) {
    return this.prisma.competition.update({
      where: { id },
      data: { status: false },
    });
  }
}
