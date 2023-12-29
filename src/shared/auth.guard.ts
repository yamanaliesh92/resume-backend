import {
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Jwt } from './jwt.service';

export interface IRequest {
  id: number;
}

const Header_token = 'auth';

@Injectable()
export class authGuard {
  constructor(private readonly jwtSer: Jwt) {}
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();

    try {
      const token = ctx.req.headers.auth;

      if (!token) {
        return false;
      }
      // try {

      const decode = await this.jwtSer.decode(token);

      ctx.user = decode;
      return true;
    } catch (err) {
      Logger.log('error in guard', { err });
      throw new InternalServerErrorException('something wrong in guard');
    }
  }
}
