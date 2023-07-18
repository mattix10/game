import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipCardComponent } from './starship-card.component';
import { starshipsMock } from 'src/mocks/starships';
import { MatCardModule } from '@angular/material/card';

fdescribe('StarshipCardComponent', () => {
  let component: StarshipCardComponent;
  let fixture: ComponentFixture<StarshipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarshipCardComponent],
      imports: [MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display mat-card, if there is no starship data', () => {
    const matCardContentElement =
      fixture.debugElement.nativeElement.querySelector('mat-card');

    expect(matCardContentElement).toBeNull();
  });

  it('should display starship data (manufacturer) in mat-card-content', () => {
    component.starship = starshipsMock[0];
    fixture.detectChanges();

    const matCardContentElement: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('mat-card-content');

    const firstParagraph = matCardContentElement.firstChild as ChildNode;

    expect(firstParagraph.textContent).toBe(
      `manufacturer: ${starshipsMock[0].manufacturer}`
    );
  });

  it('should display starship data (crew) in mat-card-subtitle', () => {
    component.starship = starshipsMock[0];
    fixture.detectChanges();

    const matCardSubtitleElement: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('mat-card-subtitle');

    expect(matCardSubtitleElement.textContent).toBe(
      `crew: ${starshipsMock[0].crew} `
    );
  });
});
