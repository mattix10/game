import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlComponent } from './game-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter, Output } from '@angular/core';
import { Resource } from 'src/models/Resource';

describe('GameControlComponent', () => {
  let component: GameControlComponent;
  let fixture: ComponentFixture<GameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameControlComponent,
        BrowserAnimationsModule,
        MockDropdownComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the event when the button is clicked', () => {
    const outputSpy = spyOn(component.onPlayButtonClick, 'emit');

    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('.play-button');
    buttonElement.click();

    expect(outputSpy).toHaveBeenCalled();
  });

  it('should emit the event when a specific action is triggered on the child component', () => {
    const childComponent: MockDropdownComponent = fixture.debugElement.query(
      By.directive(MockDropdownComponent)
    ).componentInstance;

    const outputSpy = spyOn(component.onSelectedOptionChange, 'emit');
    childComponent.onSelectedOptionChange();

    expect(outputSpy).toHaveBeenCalled();
  });
});
@Component({
  selector: 'app-mock-dropdown',
  template: '',
  standalone: true,
})
class MockDropdownComponent {
  @Output() selectedOptionChange = new EventEmitter<Resource>();

  onSelectedOptionChange() {
    this.selectedOptionChange.emit(Resource.People);
  }
}
