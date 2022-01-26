import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TilesModule } from './tiles/tile.module';
import { ConfigModule } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports: [
    UsersModule,
    TilesModule,
    MongooseModule.forRoot(
      'mongodb+srv://shalevb108:Ss8844430@cluster0.wxz6b.mongodb.net/PermissionsProject?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
