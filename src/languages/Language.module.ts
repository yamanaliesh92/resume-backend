import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';

import { LanguageController } from './Language.controller';

import { DataBaseModule } from 'src/database/databae.module';
import { LanguageDoa } from './doa/langauge.doa';
import { CreateLanguageCommandHandler } from './command/create-language/createlanguage.command.handler';
import { ModelMappersLanguage } from './service/mdoelmapper.Service';
import { LanguageResolver } from './language.resolver';
import { DeleteLanguageCommandHandler } from './command/delete-language/deleteLanguage.command.handler';
import { UpdateLanguageCommandHandler } from './command/update-language/update-language.command.handler';
import { GetLanguageCommandHandler } from './command/get-language/get-language.command.handler';
import { Jwt } from 'src/shared/jwt.service';

@Module({
  imports: [CqrsModule, DataBaseModule],
  controllers: [LanguageController],
  providers: [
    LanguageDoa,
    ModelMappersLanguage,
    Jwt,
    CreateLanguageCommandHandler,
    UpdateLanguageCommandHandler,
    GetLanguageCommandHandler,
    DeleteLanguageCommandHandler,
    LanguageResolver,
  ],
})
export class LanguageModule {}
