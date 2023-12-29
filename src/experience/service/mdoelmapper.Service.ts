import { Injectable } from '@nestjs/common';
import { Experience } from '@prisma/client';

import { ExperienceDto } from '../models/experience.dto';
import { ExperienceModel } from '../models/experience.model';

@Injectable()
export class ModelMappersExperience {
  toExperience(entity: Experience): ExperienceModel {
    const model = new ExperienceModel({
      id: entity.id,
      userId: entity.userId,

      experience: entity.experience,
      year: entity.year,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    });
    return model;
  }
  toExperienceDto(model: ExperienceModel): ExperienceDto {
    return new ExperienceDto({
      id: model.id,
      year: model.year,
      userId: model.userId,
      experience: model.experience,
      updatedAt: model.updatedAt,
      createdAt: model.createdAt,
    });
  }
}
