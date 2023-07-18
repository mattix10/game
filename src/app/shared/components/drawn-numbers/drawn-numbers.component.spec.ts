import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawnNumbersComponent } from './drawn-numbers.component';

describe('DrawnNumbersComponent', () => {
  let component: DrawnNumbersComponent;
  let fixture: ComponentFixture<DrawnNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawnNumbersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawnNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display two drawn numbers', () => {
    component.drawnNumbers = [1, 2];
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const paragraphElement = element.querySelector('.numbers') as HTMLElement;
    expect(paragraphElement.textContent).toContain('1 and 2');
  });

  it('should not display text with drawn numbers', () => {
    component.drawnNumbers = [];
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const paragraphElement = element.querySelector('.numbers');
    expect(paragraphElement).toEqual(null);
  });
});
