import { Logger, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { UpdateLanguageInput } from 'src/graphql.schema';
import { authGuard, IRequest } from 'src/shared/auth.guard';
import { CreateLanguageCommand } from './command/create-language/create-languages.command';
import { DeleteLanguageCommand } from './command/delete-language/deleteLanguage.command';
import { GetLanguageCommand } from './command/get-language/get-language.command';
import { UpdateLanguageCommand } from './command/update-language/update-language.command';

@Resolver('Language')
export class LanguageResolver {
  constructor(private readonly commandBus: CommandBus) {}
  @Query('languages')
  getAllLanguage() {
    return [
      {
        id: 1,
        createdAt: '2023-12-07 13:12:21.075',
        updatedAt: '2023-12-07 13:12:21.075',
        userId: 13,
        language: 'englis',
        level: 'very good',
      },
      {
        id: 2,
        createdAt: '2023-12-07 13:12:21.075',
        updatedAt: '2023-12-07 13:12:21.075',
        userId: 13,
        language: 'englis',
        level: 'very good',
      },
    ];
  }

  @Query('getOneLanguages')
  async getOne(@Args('payload') { id }: GetLanguageCommand) {
    try {
      return await this.commandBus.execute(new GetLanguageCommand({ id: id }));
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }

  @Mutation('deleteLanguage')
  async delete(@Args('payload') args: DeleteLanguageCommand) {
    try {
      await this.commandBus.execute(
        new DeleteLanguageCommand({
          id: args.id,
        }),
      );
      return 'delete is done';
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }

  @Mutation('updateLanguage')
  async update(@Args('payload') args: UpdateLanguageInput) {
    try {
      Logger.log('arg', args);
      await this.commandBus.execute(
        new UpdateLanguageCommand({
          id: args.id,
          language: args.language,
          level: args.level,
        }),
      );
      return 'update is done';
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }

  @UseGuards(authGuard)
  @Mutation('createLanguage')
  async create(
    @Args('data') args: CreateLanguageCommand,
    @Context('user') user: IRequest,
  ) {
    try {
      return await this.commandBus.execute(
        new CreateLanguageCommand({
          language: args.language,
          level: args.level,
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
