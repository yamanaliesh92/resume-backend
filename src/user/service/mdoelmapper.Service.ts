import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { UserDto } from '../models/user.dto';
import { UserModel } from '../models/user.model';

@Injectable()
export class ModelMappersUser {
  toUser(entity: User): UserModel {
    const model = new UserModel({
      id: entity.id,
      about: entity.about,
      email: entity.email,
      linkedIn: entity.linkedIn,
      createdAt: entity.createdAt,
      location: entity.location,
      phoneNumber: entity.phoneNumber,
      username: entity.username,
      updatedAt: entity.updatedAt,
    });
    return model;
  }
  toUserDto(userModel: UserModel): UserDto {
    return new UserDto({
      id: userModel.id,
      updatedAt: userModel.updatedAt,
      createdAt: userModel.createdAt,
      email: userModel.email,
      linkedIn: userModel.linkedIn,
      phoneNumber: userModel.phoneNumber,
      username: userModel.username,
      location: userModel.location,
      about: userModel.about,
    });
  }
}
