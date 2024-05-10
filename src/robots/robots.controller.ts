import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { RobotsService } from './robots.service';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RobotEntity } from './entities/robot.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('robots')
@ApiTags('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: RobotEntity })
  create(@Body() createRobotDto: CreateRobotDto) {
    return this.robotsService.create(createRobotDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RobotEntity, isArray: true })
  findAll() {
    return this.robotsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RobotEntity })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.robotsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RobotEntity })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRobotDto: UpdateRobotDto,
  ) {
    return this.robotsService.update(id, updateRobotDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: RobotEntity })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.robotsService.remove(id);
  }
}
