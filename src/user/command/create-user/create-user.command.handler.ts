import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Jwt } from 'src/shared/jwt.service';

import { UserDoa } from 'src/user/doa/user.doa';
import { CreateUserEntityDto } from 'src/user/dto/createUserEntity.dto';
import { ModelMappersUser } from 'src/user/service/mdoelmapper.Service';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly userRepository: UserDoa,
    private readonly mapper: ModelMappersUser,
    private readonly jwt: Jwt,
  ) {}

  async execute(command: CreateUserCommand) {
    try {
      const data: CreateUserEntityDto = {
        email: command.email,
        about: command.about,
        linkedIn: command.linkedIn,
        username: command.username,
        location: command.location,
        phoneNumber: command.phoneNumber,
      };

      const model = await this.userRepository.save(data);

      const payload = {
        id: model.id,
      };

      this.mapper.toUserDto(model);
      return await this.jwt.sign(payload);
    } catch (err) {
      Logger.log('Error', err);
    }
  }
}
