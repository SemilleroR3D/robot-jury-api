import { PartialType } from '@nestjs/swagger';
import { CreateRegistercompetitionDto } from './create-registercompetition.dto';

export class UpdateRegistercompetitionDto extends PartialType(CreateRegistercompetitionDto) {}
