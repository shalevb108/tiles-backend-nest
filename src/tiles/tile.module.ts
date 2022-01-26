import { Module } from '@nestjs/common';
import { TileController } from './tile.controller';
import { TileService } from './tile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TileSchema } from './tile.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tile', schema: TileSchema }])],
  controllers: [TileController],
  providers: [TileService],
})
export class TilesModule {}
