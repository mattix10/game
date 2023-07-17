import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Resource } from 'src/models/Resource';
import { Option } from './models/option';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-dropdown',
  templateUrl: './resource-dropdown.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class ResourceDropdownComponent {
  selectedOption = new FormControl();
  options: Option[] = [
    { value: 'People', resource: Resource.People },
    { value: 'Starships', resource: Resource.Starships },
  ];

  @Output() selectedOptionChange = new EventEmitter<Resource>();

  onSelectedOptionChange() {
    this.selectedOptionChange.emit(this.selectedOption.value);
  }
}
