import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Resource } from 'src/models/Resource';
import {
  AddPointsToWinner,
  ChangeResource,
  CheckWinner,
  CreatePlayers,
  DrawNumbers,
  GetCrewWinner,
  getMassWinner,
  LoadData,
  LoadPeople,
  LoadStarships,
  ResetData,
  SetError,
} from '../components/app-actions';
import { Injectable } from '@angular/core';
import { HttpDataService } from '../../services/http-data/http-data.service';
import { catchError, tap, throwError } from 'rxjs';
import { drawNumbers, getWinnerName } from '../../utils/utils';
import { AppStateModel } from 'src/models/AppStateModel';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    players: [],
    loading: false,
    error: null,
    resource: Resource.People,
    drawNumbers: [],
    winner: null,
  },
})
@Injectable()
export class AppState {
  constructor(private httpDataService: HttpDataService) {}

  @Selector()
  static winner({ winner }: AppStateModel) {
    return winner;
  }

  @Selector()
  static players({ players }: AppStateModel) {
    return players;
  }

  @Selector()
  static error({ error }: AppStateModel) {
    return error;
  }

  @Selector()
  static loading({ loading }: AppStateModel) {
    return loading;
  }

  @Selector()
  static drawnNumbers({ drawNumbers }: AppStateModel) {
    return drawNumbers;
  }

  @Action(SetError)
  setError({ patchState }: StateContext<AppStateModel>, { error }: SetError) {
    patchState({ error });
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
  loadData({ getState, patchState, dispatch }: StateContext<AppStateModel>) {
    patchState({ loading: true });
    const obs$ =
      getState().resource === Resource.People
        ? dispatch(new LoadPeople())
        : dispatch(new LoadStarships());
    return obs$.pipe(
      tap(() => patchState({ loading: false })),
      catchError((error) =>
        throwError(() => {
          patchState({ loading: false });
          dispatch(new SetError('Ooops... something went wrong. Try again.'));
          return error;
        })
      )
    );
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
      winner: null,
    });
  }

  @Action(CheckWinner)
  checkWinner({ getState, dispatch }: StateContext<AppStateModel>) {
    getState().resource === Resource.People
      ? dispatch(new getMassWinner())
      : dispatch(new GetCrewWinner());
  }

  @Action(getMassWinner)
  getMassWinner({ getState, patchState }: StateContext<AppStateModel>) {
    const { players } = getState();
    const maxMass = Math.max(
      ...players.map(({ person }) => parseFloat(person!.mass))
    );
    const winners = players.filter(
      ({ person }) => parseFloat(person!.mass) === maxMass
    );
    patchState({ winner: getWinnerName(winners) });
  }

  @Action(GetCrewWinner)
  GetCrewWinner({ patchState, getState }: StateContext<AppStateModel>) {
    const { players } = getState();
    const maxCrew = Math.max(
      ...players.map(({ starship }) => parseFloat(starship!.crew))
    );
    const winners = players.filter(
      ({ starship }) => parseFloat(starship!.crew) === maxCrew
    );

    patchState({ winner: getWinnerName(winners) });
  }

  @Action(AddPointsToWinner)
  addPointsToWinner(
    { setState, getState }: StateContext<AppStateModel>,
    { scores }: AddPointsToWinner
  ) {
    const { players, winner } = getState();
    setState({
      ...getState(),
      players: players.map((player) =>
        player.name === winner
          ? { ...player, scores: player.scores + scores }
          : player
      ),
    });
  }
}
