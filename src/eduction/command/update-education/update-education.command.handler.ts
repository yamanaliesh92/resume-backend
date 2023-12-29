import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EducationDoa } from 'src/eduction/doa/eductaion.doa';
import { UpdateEducationEntityDto } from 'src/eduction/dto/updateEducation.entity.dto';

import { UpdateEducationCommand } from './update-education.command';

@CommandHandler(UpdateEducationCommand)
export class UpdateEducationCommandHandler
  implements ICommandHandler<UpdateEducationCommand>
{
  constructor(private readonly doa: EducationDoa) {}

  async execute(command: UpdateEducationCommand) {
    try {
      const id = command.id;
      const data: UpdateEducationEntityDto = {
        title: command.title,
        year: command.year,
        university: command.university,
      };
      return await this.doa.update(id, data);
    } catch (err) {
      Logger.log('error here', err);
    }
  }
}
