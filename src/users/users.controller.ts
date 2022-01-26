import { Body, Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from './user.model';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async getUsers() {
    // await this.jwt.verifyCookie(req)
    return await this.usersService.getUsers();
  }

  @Post('addUser')
  async signUpUser(@Body() signUpUser: User) {
    await this.usersService.signUpUser(signUpUser);
  }

  @Post('findUser')
  async getOneUser(
    @Body() signInUserRequest,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.usersService.getOneUsers(signInUserRequest, response);
  }

  @Put('changedUsersStatus')
  async changedUsersRole(@Body() users: User[], @Req() req: Request) {
    return await this.usersService.changedUsersRole(users, req);
  }
}
