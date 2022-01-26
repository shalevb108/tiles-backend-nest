import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { JwtModule } from '@nestjs/jwt';
import { jwtMiddlewareService } from '../middlewares/jwtMiddleware.service';
import { JwtMiddlewareModule } from 'src/middlewares/jwtMiddleware.module';

@Module({
  imports: [
    JwtMiddlewareModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [UserController],
  providers: [UserService, jwtMiddlewareService],
})
export class UsersModule {}
