import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawnNumbersComponent } from './drawn-numbers.component';

describe('DrawnNumbersComponent', () => {
  let component: DrawnNumbersComponent;
  let fixture: ComponentFixture<DrawnNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawnNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawnNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
