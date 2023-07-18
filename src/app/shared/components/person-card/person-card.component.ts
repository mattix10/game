import { Component, Input } from '@angular/core';
import { Person } from 'src/models/Person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input() person!: Person;
}
