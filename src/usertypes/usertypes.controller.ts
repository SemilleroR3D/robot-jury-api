import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UsertypesService } from './usertypes.service';
import { CreateUsertypeDto } from './dto/create-usertype.dto';
import { UpdateUsertypeDto } from './dto/update-usertype.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsertypeEntity } from './entities/usertype.entity';

@Controller('usertypes')
@ApiTags('usertypes')
export class UsertypesController {
  constructor(private readonly usertypesService: UsertypesService) {}

  @Post()
  @ApiCreatedResponse({ type: UsertypeEntity })
  create(@Body() createUsertypeDto: CreateUsertypeDto) {
    return this.usertypesService.create(createUsertypeDto);
  }

  @Get()
  @ApiOkResponse({ type: UsertypeEntity, isArray: true })
  findAll() {
    return this.usertypesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UsertypeEntity })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return new UsertypeEntity(await this.usertypesService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: UsertypeEntity })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUsertypeDto: UpdateUsertypeDto,
  ) {
    return this.usertypesService.update(id, updateUsertypeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsertypeEntity })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usertypesService.remove(id);
  }
}
