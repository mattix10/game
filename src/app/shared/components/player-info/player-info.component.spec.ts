import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerInfoComponent } from './player-info.component';
import { By } from '@angular/platform-browser';

describe('PlayerInfoComponent', () => {
  let component: PlayerInfoComponent;
  let fixture: ComponentFixture<PlayerInfoComponent>;
  const player = {
    name: 'Player 1',
    person: null,
    starship: null,
    scores: 4,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display player name', () => {
    component.player = player;

    fixture.detectChanges();
    const h1Element = fixture.debugElement.query(By.css('h1'));

    expect(h1Element.nativeElement.textContent).toBe('Player 1');
  });

  it('should display player score', () => {
    component.player = player;

    fixture.detectChanges();
    const h3Element = fixture.debugElement.query(By.css('h3'));

    expect(h3Element.nativeElement.textContent).toBe('Scores: 4');
  });
});
