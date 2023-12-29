import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

export interface PayloadTokenData {
  id: number;
}
const secret = 'secretSecret';

@Injectable()
export class Jwt {
  async sign(payload: PayloadTokenData) {
    try {
      return jwt.sign(payload, secret);
    } catch (err) {
      Logger.log('error occurred during jwt service ', { err });
      throw new InternalServerErrorException('some thing went wrong');
    }
  }

  async decode(token: string) {
    try {
      return jwt.decode(token);
    } catch (err) {
      Logger.log('error occurred during jwt service ', { err });
      throw new InternalServerErrorException('some thing went wrong');
    }
  }
}
