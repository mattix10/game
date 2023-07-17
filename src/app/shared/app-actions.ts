import { Resource } from '../app.component';

export class CreatePlayers {
  static readonly type = '[Player] Create Players';
  constructor(public playerNames: string[]) {}
}

export class ClearPeople {
  static readonly type = '[Player] Clear People';
  constructor(public payload: any) {}
}

export class GetResourceType {
  static readonly type = '[App] Get resource type';
}

export class LoadPeople {
  static readonly type = '[Player] Load people';
}

export class LoadStarships {
  static readonly type = '[Player] Load starships';
}

export class ChangeResource {
  static readonly type = '[App] Change resource';
  constructor(public resource: Resource) {}
}

export class DrawNumbers {
  static readonly type = '[App] Draw numbers';
}
