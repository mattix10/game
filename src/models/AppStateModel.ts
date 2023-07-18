import { Player } from './Player';
import { Resource } from './Resource';

export interface AppStateModel {
  players: Player[];
  resource: Resource;
  winner: string | null;
  drawNumbers: number[];
  loading: boolean;
  error: string | null;
}
