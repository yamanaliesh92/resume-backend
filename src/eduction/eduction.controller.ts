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

import { CreateEducationCommand } from './command/create-education/create-education.command';

@Controller('eduction')
export class EductionController {
  constructor(private readonly commadnbus: CommandBus) {}

  @Get()
  findAll() {
    return 'dddddddd';
  }

  @Post()
  create(@Body() body: CreateEducationCommand) {
    return this.commadnbus.execute(
      new CreateEducationCommand({
        title: body.title,
        university: body.university,
        userId: body.userId,
        year: body.year,
      }),
    );
  }
}
