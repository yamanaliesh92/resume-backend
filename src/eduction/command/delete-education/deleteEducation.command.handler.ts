import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EducationDoa } from 'src/eduction/doa/eductaion.doa';
import { DeleteEducationCommand } from './deleteEducation.command';

@CommandHandler(DeleteEducationCommand)
export class DeleteEducationCommandHandler
  implements ICommandHandler<DeleteEducationCommand>
{
  constructor(private readonly doa: EducationDoa) {}

  async execute(command: DeleteEducationCommand) {
    try {
      Logger.log('comand', { c: command.id });

      return await this.doa.delete({ id: command.id });
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
