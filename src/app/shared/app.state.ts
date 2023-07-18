import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Resource } from 'src/models/Resource';
import {
  AddPointsToWinner,
  ChangeResource,
  CheckWinner,
  CreatePlayers,
  DrawNumbers,
  GetCrewWinnerIndex,
  getMassWinnerIndex,
  LoadData,
  LoadPeople,
  LoadStarships,
  ResetData,
} from './app-actions';
import { Injectable } from '@angular/core';
import { HttpDataService } from '../services/http-data/http-data.service';
import { tap } from 'rxjs';
import { drawNumbers, getWinnerIndex } from '../utils/utils';
import { AppStateModel } from 'src/models/AppStateModel';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    players: [],
    loading: false,
    error: null,
    resource: Resource.People,
    drawNumbers: [],
    winnerIndex: null,
  },
})
@Injectable()
export class AppState {
  constructor(private httpDataService: HttpDataService) {}

  @Selector()
  static resource({ resource }: AppStateModel) {
    return resource;
  }

  @Selector()
  static players({ players }: AppStateModel) {
    return players;
  }

  @Action(CreatePlayers)
  createPlayers(
    { getState, setState }: StateContext<AppStateModel>,
    { playerNames }: CreatePlayers
  ) {
    setState({
      ...getState(),
      players: playerNames.map((name) => ({
        name,
        starship: null,
        person: null,
        scores: 0,
      })),
    });
  }

  @Action(LoadData)
  loadData({ getState, dispatch }: StateContext<AppStateModel>) {
    return getState().resource === Resource.People
      ? dispatch(new LoadPeople())
      : dispatch(new LoadStarships());
  }

  @Action(LoadPeople)
  loadPeople({ getState, setState }: StateContext<AppStateModel>) {
    const { drawNumbers } = getState();
    return this.httpDataService.getPeople(drawNumbers).pipe(
      tap((people) =>
        setState({
          ...getState(),
          players: getState().players.map((player, index) => ({
            ...player,
            person: people[index],
          })),
        })
      )
    );
  }

  @Action(LoadStarships)
  loadStarships({ getState, setState }: StateContext<AppStateModel>) {
    const { drawNumbers } = getState();
    console.log('load starships');
    return this.httpDataService.getStarships(drawNumbers).pipe(
      tap((starships) =>
        setState({
          ...getState(),
          players: getState().players.map((player, index) => ({
            ...player,
            starship: starships[index],
          })),
        })
      )
    );
  }

  @Action(ChangeResource)
  changeResource(
    { patchState }: StateContext<AppStateModel>,
    { resource }: ChangeResource
  ) {
    patchState({ resource });
  }

  @Action(DrawNumbers)
  drawNumbers({ patchState }: StateContext<AppStateModel>) {
    patchState({ drawNumbers: drawNumbers() });
  }

  @Action(ResetData)
  resetData({ setState, getState }: StateContext<AppStateModel>) {
    setState({
      ...getState(),
      players: getState().players.map((player) => ({
        ...player,
        starship: null,
        person: null,
      })),
      loading: false,
      error: null,
      drawNumbers: [],
      winnerIndex: null,
    });
  }

  @Action(CheckWinner)
  checkWinner({ getState, dispatch }: StateContext<AppStateModel>) {
    getState().resource === Resource.People
      ? dispatch(new getMassWinnerIndex())
      : dispatch(new GetCrewWinnerIndex());
  }

  @Action(getMassWinnerIndex)
  getMassWinnerIndex({ getState, patchState }: StateContext<AppStateModel>) {
    const { players } = getState();
    const maxMass = Math.max(
      ...players.map(({ person }) => Number(person!.mass))
    );
    const winnerIndexes = players
      .filter(({ person }) => Number(person!.mass) === maxMass)
      .map((_, index) => index);

    patchState({ winnerIndex: getWinnerIndex(winnerIndexes) });
  }

  @Action(GetCrewWinnerIndex)
  GetCrewWinnerIndex({ patchState, getState }: StateContext<AppStateModel>) {
    const { players } = getState();
    const maxCrew = Math.max(
      ...players.map(({ starship }) => Number(starship!.crew))
    );
    const winnerIndexes = players
      .filter(({ starship }) => Number(starship!.crew) === maxCrew)
      .map((_, index) => index);

    patchState({ winnerIndex: getWinnerIndex(winnerIndexes) });
  }

  @Action(AddPointsToWinner)
  addPointsToWinner(
    { setState, getState }: StateContext<AppStateModel>,
    { scores }: AddPointsToWinner
  ) {
    const { players, winnerIndex } = getState();
    setState({
      ...getState(),
      players: players.map((player, index) =>
        winnerIndex === index
          ? { ...player, scores: player.scores + scores }
          : player
      ),
    });
  }
}
