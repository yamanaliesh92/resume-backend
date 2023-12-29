import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { ModelMappersLanguage } from 'src/languages/service/mdoelmapper.Service';
import { CreateLanguageCommand } from './create-languages.command';

@CommandHandler(CreateLanguageCommand)
export class CreateLanguageCommandHandler
  implements ICommandHandler<CreateLanguageCommand>
{
  constructor(
    private readonly langRepository: LanguageDoa,
    private readonly modelMapper: ModelMappersLanguage,
  ) {}

  async execute(command: CreateLanguageCommand) {
    try {
      const data: CreateLanguageCommand = {
        userId: command.userId,
        language: command.language,

        level: command.level,
      };

      const model = await this.langRepository.save(data);

      // this.modelMapper.toLanguageDto(model);
      return 'create is done';
      // return Object.assign({}, resullt);
    } catch (err) {
      Logger.log('Error', err);
    }
  }
}
