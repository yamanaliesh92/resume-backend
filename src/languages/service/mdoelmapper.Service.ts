import { Injectable } from '@nestjs/common';
import { Language } from '@prisma/client';

import { languageDto } from '../models/language.dto';
import { languageModel } from '../models/language.model';

@Injectable()
export class ModelMappersLanguage {
  toLanguage(entity: Language): languageModel {
    const model = new languageModel({
      id: entity.id,
      level: entity.level,
      userId: entity.userId,
      language: entity.language,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    });
    return model;
  }
  toLanguageDto(languageModel: languageModel): languageDto {
    return new languageDto({
      id: languageModel.id,
      level: languageModel.level,
      userId: languageModel.userId,
      language: languageModel.language,
      updatedAt: languageModel.updatedAt,
      createdAt: languageModel.createdAt,
    });
  }
}
