import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { GetExperienceCommand } from './get-experience.command';

@CommandHandler(GetExperienceCommand)
export class GetExperienceCommandHandler
  implements ICommandHandler<GetExperienceCommand>
{
  // constructor(private readonly doa: ExperienceDoa) {}

  async execute(command: GetExperienceCommand) {
    try {
      // return await this.doa.findOne({ id: command.id });
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
