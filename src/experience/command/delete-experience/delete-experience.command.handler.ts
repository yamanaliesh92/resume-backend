import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { DeleteExperienceCommand } from './delete-experience.command';

@CommandHandler(DeleteExperienceCommand)
export class DeleteExperienceCommandHandler
  implements ICommandHandler<DeleteExperienceCommand>
{
  // constructor(private readonly doa: ExperienceDoa) {}

  async execute(command: DeleteExperienceCommand) {
    try {
      Logger.log('del', command);
      // return await this.doa.delete({ id: command.id });
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
