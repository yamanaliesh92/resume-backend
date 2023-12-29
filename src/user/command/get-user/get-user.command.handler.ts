import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EducationDoa } from 'src/eduction/doa/eductaion.doa';
import { UserDoa } from 'src/user/doa/user.doa';
import { GetUserCommand } from './get-user.command';

@CommandHandler(GetUserCommand)
export class GetUserCommandHandler implements ICommandHandler<GetUserCommand> {
  constructor(private readonly doa: UserDoa) {}

  async execute(command: GetUserCommand) {
    try {
      const id = command.id;
      Logger.log('idddddddddddddddddddddddddddddddd', id);
      const result = await this.doa.findOne({ id: command.id });
      Logger.log('res', result);
      return result;
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
