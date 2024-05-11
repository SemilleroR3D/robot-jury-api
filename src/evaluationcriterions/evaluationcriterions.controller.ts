import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { EvaluationcriterionsService } from './evaluationcriterions.service';
import { CreateEvaluationcriterionDto } from './dto/create-evaluationcriterion.dto';
import { UpdateEvaluationcriterionDto } from './dto/update-evaluationcriterion.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EvaluationcriterionEntity } from './entities/evaluationcriterion.entity';

@Controller('evaluationcriterions')
@ApiTags('evaluationcriterions')
export class EvaluationcriterionsController {
  constructor(
    private readonly evaluationcriterionsService: EvaluationcriterionsService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: EvaluationcriterionEntity })
  create(@Body() createEvaluationcriterionDto: CreateEvaluationcriterionDto) {
    return this.evaluationcriterionsService.create(
      createEvaluationcriterionDto,
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationcriterionEntity, isArray: true })
  findAll() {
    return this.evaluationcriterionsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationcriterionEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.evaluationcriterionsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationcriterionEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEvaluationcriterionDto: UpdateEvaluationcriterionDto,
  ) {
    return this.evaluationcriterionsService.update(
      id,
      updateEvaluationcriterionDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: EvaluationcriterionEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.evaluationcriterionsService.remove(id);
  }
}
