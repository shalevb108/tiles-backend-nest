import * as mongoose from 'mongoose';

export const TileSchema = new mongoose.Schema({
  color: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

export interface Tile {
  color: string;
  createdAt: string;
  updatedAt: string;
}
