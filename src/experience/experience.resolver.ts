import { UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

import { authGuard, IRequest } from 'src/shared/auth.guard';

import { CreateExperienceCommand } from './command/create-experience/create-experience.command';

@Resolver('Experience ')
export class ExperienceResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @UseGuards(authGuard)
  @Mutation('createExperience')
  create(
    @Args('data') args: CreateExperienceCommand,
    @Context('user') user: IRequest,
  ) {
    try {
      return this.commandBus.execute(
        new CreateExperienceCommand({
          experience: args.experience,
          year: args.year,

          userId: user.id,
        }),
      );
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }
}
