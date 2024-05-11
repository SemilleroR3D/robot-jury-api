import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EvaluationEntity } from './entities/evaluation.entity';

@Controller('evaluations')
@ApiTags('evaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: EvaluationEntity })
  create(@Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationsService.create(createEvaluationDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationEntity, isArray: true })
  findAll() {
    return this.evaluationsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationEntity })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.evaluationsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationEntity })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEvaluationDto: UpdateEvaluationDto,
  ) {
    return this.evaluationsService.update(id, updateEvaluationDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationEntity })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.evaluationsService.remove(id);
  }
}
