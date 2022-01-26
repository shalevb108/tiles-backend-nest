import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtMiddlewareService } from './jwtMiddleware.service';

@Module({
  imports: [
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [],
  providers: [jwtMiddlewareService],
})
export class JwtMiddlewareModule {}
