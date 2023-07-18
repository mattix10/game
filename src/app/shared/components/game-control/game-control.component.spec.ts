import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameControlComponent } from './game-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Resource } from 'src/models/Resource';
import { ResourceDropdownComponent } from '../resource-dropdown/resource-dropdown.component';

describe('GameControlComponent', () => {
  let component: GameControlComponent;
  let fixture: ComponentFixture<GameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameControlComponent,
        BrowserAnimationsModule,
        ResourceDropdownComponent,
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
    const childComponent = fixture.debugElement.query(
      By.directive(ResourceDropdownComponent)
    ).componentInstance;

    spyOn(childComponent.selectedOptionChange, 'emit');
    childComponent.onSelectedOptionChange(Resource.People);

    expect(childComponent.selectedOptionChange.emit).toHaveBeenCalled();
  });
});
