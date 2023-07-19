import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerBarComponent } from './winner-bar.component';
import { By } from '@angular/platform-browser';

describe('WinnerBarComponent', () => {
  let component: WinnerBarComponent;
  let fixture: ComponentFixture<WinnerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinnerBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display 'Draw' if one of the players won", () => {
    component.winner = 'Draw';
    fixture.detectChanges();
    const h2Element = fixture.debugElement.query(By.css('h2'));
    expect(h2Element.nativeElement.textContent).toBe(' Draw ');
  });

  it("should display 'The winner is: Player 1' if the winner is 'Player 1'", () => {
    component.winner = 'Player 1';
    fixture.detectChanges();
    const h2Element = fixture.debugElement.query(By.css('h2'));

    expect(h2Element.nativeElement.textContent).toBe(
      ' The winner is: Player 1 '
    );
  });

  it("should display 'The winner is: Player 2' if the winner is 'Player 2'", () => {
    component.winner = 'Player 2';
    fixture.detectChanges();
    const h2Element = fixture.debugElement.query(By.css('h2'));

    expect(h2Element.nativeElement.textContent).toBe(
      ' The winner is: Player 2 '
    );
  });

  it("should has blue background color if the winner is 'Player 1' or 'Player 2'", () => {
    component.winner = 'Player 2';
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.winner-container'));

    expect(div.nativeElement).toHaveClass('bg-blue');
  });

  it('should has blue background color if there is a draw', () => {
    component.winner = 'Draw';
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.winner-container'));

    expect(div.nativeElement).toHaveClass('bg-orange');
  });
});
