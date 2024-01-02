import { CommandBus } from '@nestjs/cqrs';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserCommand } from './command/create-user/create-user.command';

@Controller('user')
export class UserController {
  constructor(private readonly commadnbus: CommandBus) {}

  @Post()
  async create(@Body() body: CreateUserCommand) {
    return await this.commadnbus.execute(
      new CreateUserCommand({
        email: body.email,
        linkedIn: body.linkedIn,
        username: body.username,
        about: body.about,
        phoneNumber: body.phoneNumber,
        location: body.location,
      }),
    );
  }

  @Get()
  findAll() {
    return 'dddddddd';
  }
}
