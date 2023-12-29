import { Injectable } from '@nestjs/common';
import { Eduction } from '@prisma/client';
import { EductionDto } from '../models/education.dto';
import { EducationModels } from '../models/education.model';

@Injectable()
export class ModelMappersEducation {
  toEduction(entity: Eduction): EducationModels {
    const model = new EducationModels({
      id: entity.id,
      userId: entity.userId,
      title: entity.title,
      university: entity.university,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
      year: entity.year,
    });
    return model;
  }
  toEductionDto(eductionModel: EducationModels): EductionDto {
    return new EductionDto({
      id: eductionModel.id,
      updatedAt: eductionModel.updatedAt,
      createdAt: eductionModel.createdAt,
      userId: eductionModel.userId,
      title: eductionModel.title,
      university: eductionModel.university,
      year: eductionModel.year,
    });
  }
}
