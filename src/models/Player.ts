import { People } from 'src/app/app.component';
import { Starship } from './Starship';

export interface Player {
  name: string;
  starship: Starship | null;
  people: People | null;
  scores: number;
}
