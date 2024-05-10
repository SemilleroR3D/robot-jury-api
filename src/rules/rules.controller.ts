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
import { RulesService } from './rules.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RuleEntity } from './entities/rule.entity';

@Controller('rules')
@ApiTags('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: RuleEntity })
  create(@Body() createRuleDto: CreateRuleDto) {
    return this.rulesService.create(createRuleDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RuleEntity, isArray: true })
  findAll() {
    return this.rulesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RuleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rulesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RuleEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRuleDto: UpdateRuleDto,
  ) {
    return this.rulesService.update(id, updateRuleDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RuleEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rulesService.remove(id);
  }
}
