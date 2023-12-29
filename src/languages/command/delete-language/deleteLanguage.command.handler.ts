import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { DeleteLanguageCommand } from './deleteLanguage.command';

@CommandHandler(DeleteLanguageCommand)
export class DeleteLanguageCommandHandler
  implements ICommandHandler<DeleteLanguageCommand>
{
  constructor(private readonly doa: LanguageDoa) {}

  async execute(command: DeleteLanguageCommand) {
    try {
      Logger.log('del', command);
      return await this.doa.delete({ id: command.id });
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
