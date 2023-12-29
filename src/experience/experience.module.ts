import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';

import { DataBaseModule } from 'src/database/databae.module';
import { ExperienceDoa } from './doa/experience.doa';
import { CreateExperienceCommandHandler } from './command/create-experience/create-experience.command.handler';

import { ExperienceResolver } from './experience.resolver';
import { DeleteExperienceCommandHandler } from './command/delete-experience/delete-experience.command.handler';
import { UpdateExperienceCommandHandler } from './command/update-experience/update-experience.command.handler';
import { GetExperienceCommandHandler } from './command/get-experience/get-lexperience.command.handler';
import { Jwt } from 'src/shared/jwt.service';
import { ModelMappersExperience } from './service/mdoelmapper.Service';

@Module({
  imports: [CqrsModule, DataBaseModule],

  providers: [
    ExperienceDoa,
    Jwt,
    CreateExperienceCommandHandler,
    UpdateExperienceCommandHandler,
    ModelMappersExperience,
    GetExperienceCommandHandler,
    DeleteExperienceCommandHandler,
    ExperienceResolver,
  ],
})
export class ExperienceModule {}
