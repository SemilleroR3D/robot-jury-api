import { PartialType } from '@nestjs/swagger';
import { CreateEvaluationcriterionDto } from './create-evaluationcriterion.dto';

export class UpdateEvaluationcriterionDto extends PartialType(CreateEvaluationcriterionDto) {}
