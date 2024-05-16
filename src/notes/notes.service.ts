import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    const { competitionRegistrationId, evaluationCriterionId, note } =
      createNoteDto;

    return this.prisma.competitionNote.upsert({
      create: createNoteDto,
      where: {
        evaluationCriterionId_competitionRegistrationId: {
          competitionRegistrationId,
          evaluationCriterionId,
        },
      },
      update: { note },
    });
  }

  findAll() {
    return this.prisma.competitionNote.findMany({});
  }
}
