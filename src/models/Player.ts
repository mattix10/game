import { Person } from './Person';
import { Starship } from './Starship';

export interface Player {
  name: string;
  starship: Starship | null;
  person: Person | null;
  scores: number;
}
