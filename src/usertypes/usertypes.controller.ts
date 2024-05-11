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
import { UsertypesService } from './usertypes.service';
import { CreateUsertypeDto } from './dto/create-usertype.dto';
import { UpdateUsertypeDto } from './dto/update-usertype.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsertypeEntity } from './entities/usertype.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddUserDto } from './dto/add-user.dto';
import { UserOnUserTypeEntity } from './entities/useronusertype.entity';

@Controller('usertypes')
@ApiTags('usertypes')
export class UsertypesController {
  constructor(private readonly usertypesService: UsertypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UsertypeEntity })
  create(@Body() createUsertypeDto: CreateUsertypeDto) {
    return this.usertypesService.create(createUsertypeDto);
  }

  @Post('user')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserOnUserTypeEntity })
  addUser(@Body() addUserDto: AddUserDto) {
    return this.usertypesService.addUser(addUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UsertypeEntity, isArray: true })
  findAll() {
    return this.usertypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UsertypeEntity })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return new UsertypeEntity(await this.usertypesService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UsertypeEntity })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUsertypeDto: UpdateUsertypeDto,
  ) {
    return this.usertypesService.update(id, updateUsertypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UsertypeEntity })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usertypesService.remove(id);
  }
}
