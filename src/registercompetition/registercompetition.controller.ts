import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RegistercompetitionService } from './registercompetition.service';
import { CreateRegistercompetitionDto } from './dto/create-registercompetition.dto';
import { UpdateRegistercompetitionDto } from './dto/update-registercompetition.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RegistercompetitionEntity } from './entities/registercompetition.entity';

@Controller('registercompetition')
@ApiTags('registercompetition')
export class RegistercompetitionController {
  constructor(
    private readonly registercompetitionService: RegistercompetitionService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: RegistercompetitionEntity })
  create(@Body() createRegistercompetitionDto: CreateRegistercompetitionDto) {
    return this.registercompetitionService.create(createRegistercompetitionDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RegistercompetitionEntity, isArray: true })
  findAll() {
    return this.registercompetitionService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RegistercompetitionEntity })
  findOne(@Param('id') id: string) {
    return this.registercompetitionService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RegistercompetitionEntity })
  update(
    @Param('id') id: string,
    @Body() updateRegistercompetitionDto: UpdateRegistercompetitionDto,
  ) {
    return this.registercompetitionService.update(
      id,
      updateRegistercompetitionDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RegistercompetitionEntity })
  remove(@Param('id') id: string) {
    return this.registercompetitionService.remove(id);
  }
}
