import { Resource } from 'src/models/Resource';

export class CreatePlayers {
  static readonly type = '[Player] CreatePlayers';
  constructor(public playerNames: string[]) {}
}

export class LoadData {
  static readonly type = '[Player] LoadData';
}

export class LoadPeople {
  static readonly type = '[Player] LoadPeople';
}

export class LoadStarships {
  static readonly type = '[Player] LoadStarships';
}

export class SetError {
  static readonly type = '[App] SetError';
  constructor(public error: string) {}
}

export class ChangeResource {
  static readonly type = '[App] ChangeResource';
  constructor(public resource: Resource) {}
}

export class DrawNumbers {
  static readonly type = '[App] DrawNumbers';
}

export class ResetData {
  static readonly type = '[App] ResetData';
}

export class CheckWinner {
  static readonly type = '[App] CheckWinner';
}

export class getMassWinner {
  static readonly type = '[App] getMassWinner';
}

export class GetCrewWinner {
  static readonly type = '[App] GetCrewWinner';
}

export class AddPointsToWinner {
  static readonly type = '[App] AddPointsToWinner';
  constructor(public scores: number) {}
}
