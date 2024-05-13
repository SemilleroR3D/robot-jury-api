import { PartialType } from '@nestjs/swagger';
import { CreateJuryDto } from './create-jury.dto';

export class UpdateJuryDto extends PartialType(CreateJuryDto) {}
