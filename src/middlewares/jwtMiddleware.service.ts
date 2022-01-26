import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from 'src/users/user.model';

export class jwtMiddlewareService {
  constructor(private jwtService: JwtService) {}

  async verifyCookie(token: string) {
    console.log(token);
    const data = await this.jwtService.verifyAsync(token);
    if (data) {
      return true;
    } else {
      return false;
    }
  }

  async createCookie(user: User, response: Response) {
    const jwt = await this.jwtService.signAsync({ id: user._id });
    response.cookie('token', jwt, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 100 * 60 * 60 * 24,
    });
  }
}
