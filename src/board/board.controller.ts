import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('positions')
  findPositions() {
    return this.boardService.findPositions();
  }

  @Get()
  findBoard() {
    return this.boardService.findBoard();
  }
}
