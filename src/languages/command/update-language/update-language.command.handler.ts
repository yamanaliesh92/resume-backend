import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { UpdateLanguagesEntityDto } from 'src/languages/dto/updateLangauge.entity.dto';
import { UpdateLanguageCommand } from './update-language.command';

@CommandHandler(UpdateLanguageCommand)
export class UpdateLanguageCommandHandler
  implements ICommandHandler<UpdateLanguageCommand>
{
  constructor(private readonly doa: LanguageDoa) {}

  async execute(command: UpdateLanguageCommand) {
    try {
      const id = command.id;
      const data: UpdateLanguagesEntityDto = {
        language: command.language,
        level: command.level,
      };
      return await this.doa.update(id, data);
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
