import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AppState } from './shared/app.state';
import { Store, Select } from '@ngxs/store';
import {
  AddPointsToWinner,
  ChangeResource,
  CheckWinner,
  CreatePlayers,
  DrawNumbers,
  LoadPeople,
  LoadStarships,
  ResetData,
} from './shared/app-actions';
import { Resource } from 'src/models/Resource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Select(AppState.resource) resource$!: Observable<Resource>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new CreatePlayers(['Player 1', 'Player 2']));
  }

  onChangeResource() {
    this.store.dispatch(new ChangeResource(Resource.Starships));
  }

  play() {
    this.store.dispatch(new ResetData());
    this.store.dispatch(new DrawNumbers());
    this.resource$
      .pipe(switchMap((resource: Resource) => this.loadData(resource)))
      .subscribe(() => {
        this.store.dispatch(new CheckWinner());
        this.store.dispatch(new AddPointsToWinner(1));
      });
  }

  loadData(resource: Resource) {
    return resource === Resource.People
      ? this.store.dispatch(new LoadPeople())
      : this.store.dispatch(new LoadStarships());
  }
}
