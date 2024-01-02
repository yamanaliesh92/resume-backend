import { Logger, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { CreateEductionDto } from 'src/dto/createEduction.dto';
import { UpdateEducationInput } from 'src/graphql.schema';
import { authGuard, IRequest } from 'src/shared/auth.guard';
import { CreateEducationCommand } from './command/create-education/create-education.command';
import { DeleteEducationCommand } from './command/delete-education/deleteEducation.command';
import { GetEducationCommand } from './command/get-eduction/get-education.command';
import { UpdateEducationCommand } from './command/update-education/update-education.command';

@Resolver('Eduction')
export class EductionResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @UseGuards(authGuard)
  @Mutation('createEduction')
  create(
    @Args('data') args: CreateEductionDto,
    @Context('user') user: IRequest,
  ) {
    try {
      return this.commandBus.execute(
        new CreateEducationCommand({
          title: args.title,
          university: args.university,
          userId: user.id,
          year: args.year,
        }),
      );
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }

  @Query('getOneEducation')
  async getOne(@Args('payload') { id }: GetEducationCommand) {
    try {
      return await this.commandBus.execute(new GetEducationCommand({ id: id }));
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }

  @Mutation('deleteEducation')
  async delete(@Args('payload') args: DeleteEducationCommand) {
    try {
      await this.commandBus.execute(
        new DeleteEducationCommand({
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

  @Mutation('updateEducation')
  async update(@Args('payload') args: UpdateEducationInput) {
    try {
      Logger.log('arg', args);
      await this.commandBus.execute(
        new UpdateEducationCommand({
          id: args.id,
          title: args.title,
          university: args.university,
        }),
      );
      return 'update is done';
    } catch (err) {
      throw new GraphQLError('some thing went wrong try again please,,', {
        extensions: { code: '500' },
      });
    }
  }
}
