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
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TeamEntity } from './entities/team.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddUserDto } from './dto/add-user.dto';

@Controller('teams')
@ApiTags('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TeamEntity })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Post('add')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TeamEntity })
  addUsers(@Body() addUsersDto: AddUserDto) {
    return this.teamsService.addUsers(addUsersDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TeamEntity, isArray: true })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TeamEntity })
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TeamEntity })
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TeamEntity })
  remove(@Param('id') id: string) {
    return this.teamsService.remove(+id);
  }
}
