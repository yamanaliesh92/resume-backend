import { Logger, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

import { CreateLanguagesEntityDto } from '../dto/createLangaugeEntity.dto';
import { UpdateLanguagesEntityDto } from '../dto/updateLangauge.entity.dto';
import { ModelMappersLanguage } from '../service/mdoelmapper.Service';

@Injectable()
export class LanguageDoa {
  constructor(
    private readonly prismaSchema: PrismaService,
    private readonly modelMappers: ModelMappersLanguage,
  ) {}

  async save(dto: CreateLanguagesEntityDto) {
    // try {
    const model: CreateLanguagesEntityDto = {
      language: dto.language,
      level: dto.level,
      userId: dto.userId,
    };

    const save = await this.prismaSchema.language.create({
      data: {
        language: model.language,
        userId: model.userId,
        level: model.level,
      },
    });

    return await this.modelMappers.toLanguage(save);
    // } catch (err) {
    //   Logger.log('error in save', err);
    // }
  }

  async delete(where: Prisma.LanguageWhereUniqueInput) {
    try {
      await this.prismaSchema.language.delete({ where: where });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  async findOne(where: Prisma.LanguageWhereUniqueInput) {
    try {
      // Logger.log('where', where);
      // const id = where.id;
      return await this.prismaSchema.language.findUnique({
        where,
      });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  async update(id: number, dto: UpdateLanguagesEntityDto) {
    try {
      return await this.prismaSchema.language.update({
        where: { id: id },
        data: { level: dto.level, language: dto.language },
      });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }
}
