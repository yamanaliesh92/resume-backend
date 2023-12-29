import { Logger, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { authGuard, IRequest } from 'src/shared/auth.guard';
import { CreateUserCommand } from './command/create-user/create-user.command';
import { GetUserCommand } from './command/get-user/get-user.command';
import { UserDto } from './user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation('createUser')
  create(@Args('createUserInput') args: UserDto) {
    Logger.log('here');
    Logger.log('args', args.location);
    return this.commandBus.execute(
      new CreateUserCommand({
        about: args.about,
        email: args.email,
        username: args.username,
        linkedIn: args.location,
        phoneNumber: args.phoneNumber,
        location: args.location,
      }),
    );
  }

  @UseGuards(authGuard)
  @Query('getUser')
  getMe(@Context('user') user: IRequest) {
    return this.commandBus.execute(new GetUserCommand({ id: user.id }));
  }
  @Query('users')
  getAllUser() {
    return [
      {
        id: 1,
        about: 'ed',
        email: 'das',
        password: 'pass',
        username: 'user',
        location: 'da',
        phoneNumber: 12,
      },
      {
        id: 2,
        about: 'ed',
        email: 'das',
        password: 'pass',
        username: 'user',
        location: 'da',
        phoneNumber: 12,
      },
    ];
  }
}
