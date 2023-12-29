import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ExperienceDoa } from 'src/experience/doa/experience.doa';
import { ModelMappersExperience } from 'src/experience/service/mdoelmapper.Service';
import { LanguageDoa } from 'src/languages/doa/langauge.doa';
import { ModelMappersLanguage } from 'src/languages/service/mdoelmapper.Service';
import { CreateExperienceCommand } from './create-experience.command';

@CommandHandler(CreateExperienceCommand)
export class CreateExperienceCommandHandler
  implements ICommandHandler<CreateExperienceCommand>
{
  constructor(
    private readonly expDoa: ExperienceDoa,
    private readonly modelMap: ModelMappersExperience,
  ) {}
  async execute(command: CreateExperienceCommand) {
    try {
      const data: CreateExperienceCommand = {
        userId: command.userId,
        year: command.year,

        experience: command.experience,
      };

      const model = await this.expDoa.save(data);

      this.modelMap.toExperienceDto(model);
      return 'create is done';
      // return Object.assign({}, resullt);
    } catch (err) {
      Logger.log('Error', err);
    }
  }
}
