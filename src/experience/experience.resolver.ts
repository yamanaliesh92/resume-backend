import {
  InternalServerErrorException,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateLanguageInput } from 'src/graphql.schema';
import { authGuard, IRequest } from 'src/shared/auth.guard';
// import { CreateLanguageInput } from 'src/graphql.schema';
import { CreateExperienceCommand } from './command/create-experience/create-experience.command';
import { DeleteExperienceCommand } from './command/delete-experience/delete-experience.command';

import { UpdateExperienceCommand } from './command/update-experience/update-experience.command';

@Resolver('Experience ')
export class ExperienceResolver {
  constructor(private readonly commandBus: CommandBus) {}
  // @Query('languages')
  // getAllLanguage() {
  //   return [
  //     {
  //       id: 1,
  //       createdAt: '2023-12-07 13:12:21.075',
  //       updatedAt: '2023-12-07 13:12:21.075',
  //       userId: 13,
  //       language: 'englis',
  //       level: 'very good',
  //     },
  //     {
  //       id: 2,
  //       createdAt: '2023-12-07 13:12:21.075',
  //       updatedAt: '2023-12-07 13:12:21.075',
  //       userId: 13,
  //       language: 'englis',
  //       level: 'very good',
  //     },
  //   ];
  // }

  // @Query('getOneLanguages')
  // async getOne(@Args('payload') { id }: GetExperienceCommand) {
  //   return await this.commandBus.execute(new GetExperienceCommand({ id: id }));
  // }

  // @Mutation('deleteLanguage')
  // async delete(@Args('payload') args: DeleteExperienceCommand) {
  //   try {
  //     await this.commandBus.execute(
  //       new DeleteExperienceCommand({
  //         id: args.id,
  //       }),
  //     );
  //     return 'delete is done';
  //   } catch (err) {
  //     throw new InternalServerErrorException('some thinge went wrong');
  //   }
  // }

  // @Mutation('updateLanguage')
  // async update(@Args('payload') args: UpdateLanguageInput) {
  //   try {
  //     Logger.log('arg', args);
  //     await this.commandBus.execute(
  //       new UpdateExperienceCommand({
  //         id: args.id,
  //         language: args.language,
  //         level: args.level,
  //       }),
  //     );
  //     return 'update is done';
  //   } catch (err) {
  //     throw new InternalServerErrorException('some things went wrong');
  //   }
  // }

  @UseGuards(authGuard)
  @Mutation('createExperience')
  crea(
    @Args('data') args: CreateExperienceCommand,
    @Context('user') user: IRequest,
  ) {
    Logger.log('herllo', { user: user.id });
    Logger.log('herllo', { args });

    return this.commandBus.execute(
      new CreateExperienceCommand({
        experience: args.experience,
        year: args.year,

        userId: user.id,
      }),
    );
  }
}
