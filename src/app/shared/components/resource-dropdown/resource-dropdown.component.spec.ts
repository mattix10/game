import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceDropdownComponent } from './resource-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Resource } from 'src/models/Resource';

describe('ResourceDropdownComponent', () => {
  let component: ResourceDropdownComponent;
  let fixture: ComponentFixture<ResourceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ResourceDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected option value', () => {
    const selectedValue = Resource.Starships;

    spyOn(component.selectedOptionChange, 'emit');

    component.selectedOption.setValue(selectedValue);
    component.onSelectedOptionChange();

    expect(component.selectedOptionChange.emit).toHaveBeenCalledWith(
      selectedValue
    );
  });
});
