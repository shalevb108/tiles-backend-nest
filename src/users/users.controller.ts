import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('addUser')
  signUpUser(@Body() signUpUser: User) {
    const newUser = signUpUser as User;
    this.usersService.signUpUser(newUser);
  }
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
