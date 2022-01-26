import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TilesModule } from './tiles/tile.module';
import { JwtMiddlewareModule } from './middlewares/jwtMiddleware.module';

@Module({
  imports: [
    UsersModule,
    TilesModule,
    JwtMiddlewareModule,
    MongooseModule.forRoot(
      'mongodb+srv://shalevb108:Ss8844430@cluster0.wxz6b.mongodb.net/PermissionsProject?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
