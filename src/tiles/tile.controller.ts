import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Tile } from './tile.model';
import { TileService } from './tile.service';

@UseGuards(AuthGuard)
@Controller('tiles')
export class TileController {
  constructor(private readonly tileService: TileService) {}

  @Get()
  async getTiles() {
    return await this.tileService.getTiles();
  }

  @Post('addTiles')
  async addTiles(@Body() tilesToAdd: Tile[]) {
    await this.tileService.addTiles(tilesToAdd);
  }
  @Delete('deleteTiles')
  async deleteTiles(@Body() tilesToDelete: Tile[]) {
    await this.tileService.deleteTiles(tilesToDelete);
  }

  @Put('changedColorTiles')
  async changedColorTiles(@Body() tilesToChange: Tile[]) {
    await this.tileService.changedColorTiles(tilesToChange);
  }
}
