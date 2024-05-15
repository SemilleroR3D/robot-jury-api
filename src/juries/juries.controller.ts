import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JuriesService } from './juries.service';
import { CreateJuryDto } from './dto/create-jury.dto';
import { UpdateJuryDto } from './dto/update-jury.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserOnEvaluationEntity } from './entities/user-on-evaluation.entity';
import { JuryEntity } from './entities/jury.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('juries')
@ApiTags('juries')
export class JuriesController {
  constructor(private readonly juriesService: JuriesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserOnEvaluationEntity })
  create(@Body() createJuryDto: CreateJuryDto) {
    return this.juriesService.create(createJuryDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: JuryEntity, isArray: true })
  async findAll() {
    const juries = await this.juriesService.findAll();
    return juries.map((jury) => new JuryEntity(jury));
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: JuryEntity })
  async getUserById(@Request() req: any) {
    const { id } = req.user;
    return new JuryEntity(await this.juriesService.findOne(id));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: JuryEntity })
  async findOne(@Param('id') id: string) {
    return new JuryEntity(await this.juriesService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserOnEvaluationEntity })
  update(@Param('id') id: string, @Body() updateJuryDto: UpdateJuryDto) {
    return this.juriesService.update(id, updateJuryDto);
  }
}
