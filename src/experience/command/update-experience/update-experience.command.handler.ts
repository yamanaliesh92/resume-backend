import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { UpdateLanguagesEntityDto } from 'src/languages/dto/updateLangauge.entity.dto';
import { UpdateExperienceCommand } from './update-experience.command';

@CommandHandler(UpdateExperienceCommand)
export class UpdateExperienceCommandHandler
  implements ICommandHandler<UpdateExperienceCommand>
{
  // constructor(private readonly doa: ExperienceDoa) {}

  async execute(command: UpdateExperienceCommand) {
    try {
      const id = command.id;
      // const data: UpdateLanguagesEntityDto = {
      //   experience: command.experience,
      //   year: command.year,
      // };
      // return await this.doa.update(id, data);
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
