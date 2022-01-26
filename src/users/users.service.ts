import { Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Response, Request } from 'express';
import { Model } from 'mongoose';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './user.model';
import { comparePassword, encodePassword } from './utils/bcrypt';
let mongoose = require('mongoose');

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUpUser(user: User) {
    let id = mongoose.Types.ObjectId();
    const password = await encodePassword(user.password);
    const newUser = new this.userModel({
      ...user,
      _id: id,
      password: password,
    });
    await newUser.save();
  }
  async getUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }
  async getOneUsers(signInUserRequest, response: Response) {
    const user = (await this.userModel
      .findOne({
        email: signInUserRequest.email,
      })
      .exec()) as User;
    if (user) {
      const matched = comparePassword(
        signInUserRequest.password,
        user.password,
      );
      if (matched) {
        await this.createCookie(user, response);
        return { user: user };
      }
      return null;
    }
  }
  async changedUsersRole(users: User[], req: Request) {
    for (const user of users) {
      (await this.userModel
        .findOneAndUpdate({ _id: user._id }, { role: user.role })
        .exec()) as User;
    }
  }

  async createCookie(user: User, response: Response) {
    const jwt = await this.jwtService.signAsync({
      id: user._id,
      role: user.role,
    });

    response.cookie('jwt', jwt, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 100 * 60 * 60 * 24,
    });
  }
}
