import { Logger, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

import { CreateUserEntityDto } from '../dto/createUserEntity.dto';
import { ModelMappersUser } from '../service/mdoelmapper.Service';

// import { ModelMappers } from '../../eduction/service/mdoelmapper.Service';

@Injectable()
export class UserDoa {
  constructor(
    private readonly prismaSchema: PrismaService,
    private readonly modelMappers: ModelMappersUser,
  ) {}

  async save(dto: CreateUserEntityDto) {
    // try {
    const model: CreateUserEntityDto = {
      email: dto.email,
      location: dto.location,
      linkedIn: dto.linkedIn,
      username: dto.username,
      about: dto.about,
      phoneNumber: dto.phoneNumber,
    };

    const save = await this.prismaSchema.user.create({
      data: {
        email: model.email,
        linkedIn: model.linkedIn,
        location: model.location,
        about: model.about,
        phoneNumber: model.phoneNumber as any,
        username: model.username,
      },
    });

    return await this.modelMappers.toUser(save);
    // } catch (err) {
    //   Logger.log('error in save', err);
    // }
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    try {
      const id = Number(where.id);
      Logger.log('where', id);
      await this.prismaSchema.user.delete({ where: where });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    try {
      // Logger.log('where', where);
      // const id = where.id;
      return await this.prismaSchema.user.findUnique({
        where,
        include: {
          experiences: true,
          languages: true,
          eductions: true,
        },
      });
    } catch (err) {
      Logger.log('error in save', err);
    }
  }
}
