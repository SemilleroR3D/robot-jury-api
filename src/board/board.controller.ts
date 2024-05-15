import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BoardEntity } from './entities/board.entity';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  @ApiResponse({ type: BoardEntity, isArray: true })
  findAll() {
    return this.boardService.findAll();
  }
}
