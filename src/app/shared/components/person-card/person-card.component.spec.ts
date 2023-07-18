import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardComponent } from './person-card.component';
import { peopleMock } from 'src/mocks/people';
import { MatCardModule } from '@angular/material/card';

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCardComponent],
      imports: [MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display person data (height) in mat-card-content', () => {
    component.person = peopleMock[0];
    fixture.detectChanges();

    const matCardContentElement: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('mat-card-content');

    const firstParagraph = matCardContentElement.firstChild as ChildNode;

    expect(firstParagraph.textContent).toBe(`height: ${peopleMock[0].height}`);
  });

  it('should display person data (mass) in mat-card-subtitle', () => {
    component.person = peopleMock[0];
    fixture.detectChanges();

    const matCardSubtitleElement: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('mat-card-subtitle');

    expect(matCardSubtitleElement.textContent).toBe(
      `mass: ${peopleMock[0].mass}`
    );
  });
});
