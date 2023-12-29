import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { GetLanguageCommand } from './get-language.command';

@CommandHandler(GetLanguageCommand)
export class GetLanguageCommandHandler
  implements ICommandHandler<GetLanguageCommand>
{
  constructor(private readonly doa: LanguageDoa) {}

  async execute(command: GetLanguageCommand) {
    try {
      return await this.doa.findOne({ id: command.id });
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
