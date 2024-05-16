import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NoteEntity } from './entities/note.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('notes')
@ApiTags('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: NoteEntity })
  async create(@Body() createNoteDto: CreateNoteDto) {
    return new NoteEntity(await this.notesService.create(createNoteDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: NoteEntity, isArray: true })
  async findAll() {
    const notes = await this.notesService.findAll();
    return notes.map((note) => new NoteEntity(note));
  }
}
