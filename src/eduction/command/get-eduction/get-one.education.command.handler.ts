import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EducationDoa } from 'src/eduction/doa/eductaion.doa';
import { GetEducationCommand } from './get-education.command';

@CommandHandler(GetEducationCommand)
export class GetEducationCommandHandler
  implements ICommandHandler<GetEducationCommand>
{
  constructor(private readonly doa: EducationDoa) {}

  async execute(command: GetEducationCommand) {
    try {
      return await this.doa.findOne({ id: command.id });
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
