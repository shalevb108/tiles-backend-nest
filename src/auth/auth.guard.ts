import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as Jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    if (!req) {
      throw new UnauthorizedException();
    }
    const token = req.cookies.jwt;

    if (!token) {
      throw new UnauthorizedException();
    }
    return this.validateToken(token);
  }
  async validateToken(token: string) {
    return !!Jwt.verify(token, process.env.JWT);
  }
}
