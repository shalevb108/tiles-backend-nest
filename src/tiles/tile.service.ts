import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tile } from './tile.model';

@Injectable()
export class TileService {
  constructor(@InjectModel('Tile') private readonly TileModel: Model<Tile>) {}

  async getTiles() {
    const tiles = await this.TileModel.find().exec();
    return tiles;
  }
  async addTiles(tilesToAdd: Tile[]) {
    await this.TileModel.insertMany(tilesToAdd);
  }
  async deleteTiles(tilesToDelete: Tile[]) {
    for (const tile of tilesToDelete) {
      await this.TileModel.deleteOne(tile);
    }
  }
  async changedColorTiles(tilesToChange: Tile[]) {
    for (const tile of tilesToChange) {
      await this.TileModel.findOneAndUpdate(
        { createdAt: tile.createdAt },
        { color: tile.color },
      );
    }
  }
}
