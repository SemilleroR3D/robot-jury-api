import { Controller, Get, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('positions/:id')
  findPositions(@Param('id') id: string) {
    return this.boardService.findPositions(id);
  }

  @Get(':id')
  findBoard(@Param('id') id: string) {
    return this.boardService.findBoard(id);
  }
}
