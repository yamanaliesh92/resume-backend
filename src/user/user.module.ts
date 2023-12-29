import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';

import { DataBaseModule } from 'src/database/databae.module';
import { UserDoa } from './doa/user.doa';

import { CreateUserCommandHandler } from './command/create-user/create-user.command.handler';
import { ModelMappersUser } from './service/mdoelmapper.Service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { join } from 'path';
import { Jwt } from 'src/shared/jwt.service';
import { GetUserCommandHandler } from './command/get-user/get-user.command.handler';

@Module({
  imports: [CqrsModule, DataBaseModule],
  controllers: [UserController],
  providers: [
    CreateUserCommandHandler,
    Jwt,
    GetUserCommandHandler,
    UserDoa,
    ModelMappersUser,
    UserResolver,
  ],
})
export class UserModule {}
