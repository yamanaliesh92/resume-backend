import { Logger, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

import { CreateEducationEntityDto } from '../dto/createEductionEntity';
import { UpdateEducationEntityDto } from '../dto/updateEducation.entity.dto';
import { ModelMappersEducation } from '../service/mdoelmapper.Service';

@Injectable()
export class EducationDoa {
  constructor(
    private readonly prismaSchema: PrismaService,
    private readonly modelMappers: ModelMappersEducation,
  ) {}

  async save(dto: CreateEducationEntityDto) {
    // try {
    const model: CreateEducationEntityDto = {
      title: dto.title,
      university: dto.university,
      userId: dto.userId,
      year: dto.year,
    };

    const save = await this.prismaSchema.eduction.create({
      data: model,
    });

    return await this.modelMappers.toEduction(save);
    // } catch (err) {
    //   Logger.log('error in save', err);
    // }
  }

  async update(id: number, dto: UpdateEducationEntityDto) {
    try {
      dto.title ? { title: dto.title } : {};
      dto.university ? { university: dto.university } : {};
      dto.year ? { year: dto.year } : {};
      return await this.prismaSchema.eduction.update({
        where: { id: id },
        data: { title: dto.title, university: dto.university, year: dto.year },
      });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  async delete(where: Prisma.EductionWhereUniqueInput) {
    try {
      const id = Number(where.id);
      Logger.log('where', id);
      await this.prismaSchema.eduction.delete({ where: where });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  async findOne(where: Prisma.EductionWhereUniqueInput) {
    try {
      return await this.prismaSchema.eduction.findUnique({
        where,
      });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }
}
