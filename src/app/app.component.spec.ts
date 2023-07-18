import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './shared/store/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Resource } from 'src/models/Resource';
import { CreatePlayers } from './shared/store/app-actions';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxsModule.forRoot([AppState]), HttpClientTestingModule],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should create two players', async () => {
    await store.dispatch(new CreatePlayers(['My Player 1', 'My Player 2']));

    const { players } = store.selectSnapshot(AppState);
    expect(players.length).toBe(2);
  });

  it("should change resource to 'Starship' after changing dropdown value", () => {
    app.handleSelectedOption(Resource.Starships);
    fixture.detectChanges();

    const { resource } = store.selectSnapshot(AppState);
    expect(resource).toEqual(Resource.Starships);
  });

  it("should draw 2 numbers after clicking 'Play' button", () => {
    app.handlePlayButton();
    fixture.detectChanges();

    const { drawNumbers } = store.selectSnapshot(AppState);
    expect(drawNumbers.length).toBe(2);
  });
});
