import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async signUpUser(user: User) {
    const newUser = new this.userModel(user);
    const res = await newUser.save();
  }
  async getUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }
}
