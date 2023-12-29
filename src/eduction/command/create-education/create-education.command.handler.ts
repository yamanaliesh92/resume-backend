import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EducationDoa } from 'src/eduction/doa/eductaion.doa';
import { ModelMappersEducation } from 'src/eduction/service/mdoelmapper.Service';
import { UserDoa } from 'src/user/doa/user.doa';
import { CreateEducationCommand } from './create-education.command';

@CommandHandler(CreateEducationCommand)
export class CreateEductionCommandHandler
  implements ICommandHandler<CreateEducationCommand>
{
  constructor(
    private readonly educDoa: EducationDoa,
    private readonly modelMapper: ModelMappersEducation,
  ) {}

  async execute(command: CreateEducationCommand) {
    try {
      const data = {
        university: command.university,
        title: command.title,
        userId: command.userId,
        year: command.year,
      };
      Logger.log('data', data);

      const model = await this.educDoa.save(data);

      Logger.log('model', model.userId);

      this.modelMapper.toEductionDto(model);
      return 'Create is done';
    } catch (err) {
      Logger.log('Error', err);
    }
  }
}
