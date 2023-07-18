import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerBarComponent } from './winner-bar.component';

describe('WinnerBarComponent', () => {
  let component: WinnerBarComponent;
  let fixture: ComponentFixture<WinnerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
