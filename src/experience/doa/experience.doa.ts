import { Logger, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

import { CreateExperienceEntityDto } from '../dto/createExperienceEntity.dto';
import { UpdateLanguagesEntityDto } from '../dto/updateExperience.entity.dto';
import { ModelMappersExperience } from '../service/mdoelmapper.Service';

@Injectable()
export class ExperienceDoa {
  constructor(
    private readonly prismaSchema: PrismaService,
    private readonly modelMappers: ModelMappersExperience,
  ) {}

  async save(dto: CreateExperienceEntityDto) {
    // try {
    const model: CreateExperienceEntityDto = {
      experience: dto.experience,
      year: dto.year,
      userId: dto.userId,
    };

    const save = await this.prismaSchema.experience.create({
      data: {
        experience: model.experience,
        userId: model.userId,
        year: model.year,
      },
    });

    return await this.modelMappers.toExperience(save);
    // } catch (err) {
    //   Logger.log('error in save', err);
    // }
  }

  async delete(where: Prisma.ExperienceWhereUniqueInput) {
    try {
      await this.prismaSchema.experience.delete({ where: where });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  async findOne(where: Prisma.ExperienceWhereUniqueInput) {
    try {
      // Logger.log('where', where);
      // const id = where.id;
      return await this.prismaSchema.experience.findUnique({
        where,
      });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  // async update(id: number, dto: UpdateLanguagesEntityDto) {
  //   try {
  //     return await this.prismaSchema.languages.update({
  //       where: { id: id },
  //       data: { level: dto.level, language: dto.language },
  //     });
  //   } catch (err) {
  //     Logger.log('error in save', err);
  //   }
  // }
}
