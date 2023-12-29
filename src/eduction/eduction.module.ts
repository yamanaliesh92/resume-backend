import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';

import { DataBaseModule } from 'src/database/databae.module';
import { EductionController } from './eduction.controller';
import { EducationDoa } from './doa/eductaion.doa';
import { DeleteEducationCommandHandler } from './command/delete-education/deleteEducation.command.handler';
import { CreateEductionCommandHandler } from './command/create-education/create-education.command.handler';
import { ModelMappersEducation } from './service/mdoelmapper.Service';
import { EductionResolver } from './eduction.resolver';
import { GetEducationCommandHandler } from './command/get-eduction/get-one.education.command.handler';
import { UpdateEducationCommandHandler } from './command/update-education/update-education.command.handler';
import { Jwt } from 'src/shared/jwt.service';

@Module({
  imports: [CqrsModule, DataBaseModule],
  controllers: [EductionController],

  providers: [
    EducationDoa,
    DeleteEducationCommandHandler,
    ModelMappersEducation,
    Jwt,
    EductionResolver,
    UpdateEducationCommandHandler,
    GetEducationCommandHandler,
    CreateEductionCommandHandler,
  ],
})
export class EductionModule {}
