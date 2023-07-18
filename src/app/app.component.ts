import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './shared/app.state';
import { Store, Select } from '@ngxs/store';
import {
  AddPointsToWinner,
  ChangeResource,
  CheckWinner,
  CreatePlayers,
  DrawNumbers,
  LoadData,
  ResetData,
} from './shared/app-actions';
import { Resource } from 'src/models/Resource';
import { Player } from 'src/models/Player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Select(AppState.resource) resource$!: Observable<Resource>;
  @Select(AppState.players) players$!: Observable<Player[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new CreatePlayers(['Player 1', 'Player 2']));
  }

  handleSelectedOption(resource: Resource) {
    this.store.dispatch(new ChangeResource(resource));
  }

  handlePlayButton() {
    this.store.dispatch(new ResetData());
    this.store.dispatch(new DrawNumbers());
    this.store.dispatch(new LoadData()).subscribe(() => {
      this.store.dispatch(new CheckWinner());
      this.store.dispatch(new AddPointsToWinner(1));
    });
  }
}
