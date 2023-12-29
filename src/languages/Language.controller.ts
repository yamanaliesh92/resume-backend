import { CommandBus } from '@nestjs/cqrs';
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { CreateLanguageCommand } from './command/create-language/create-languages.command';

@Controller('language')
export class LanguageController {
  constructor(private readonly commadnbus: CommandBus) {}

  @Post()
  async create(@Body() body: CreateLanguageCommand) {
    return await this.commadnbus.execute(
      new CreateLanguageCommand({
        language: body.language,
        level: body.level,
        userId: body.userId,
      }),
    );
  }

  @Get()
  findAll() {
    return 'dddddddd';
  }

  // @Delete(':id')
}
