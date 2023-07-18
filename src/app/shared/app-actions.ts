import { Resource } from 'src/models/Resource';

export class CreatePlayers {
  static readonly type = '[Player] CreatePlayers';
  constructor(public playerNames: string[]) {}
}

export class ClearPeople {
  static readonly type = '[Player] ClearPeople';
  constructor(public payload: any) {}
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

export class GetResourceType {
  static readonly type = '[App] GetResourceType';
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

export class getMassWinnerIndex {
  static readonly type = '[App] getMassWinnerIndex';
}

export class GetCrewWinnerIndex {
  static readonly type = '[App] GetCrewWinnerIndex';
}

export class AddPointsToWinner {
  static readonly type = '[App] AddPointsToWinner';
  constructor(public scores: number) {}
}
