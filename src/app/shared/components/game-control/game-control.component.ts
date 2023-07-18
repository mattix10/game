import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResourceDropdownComponent } from '../resource-dropdown/resource-dropdown.component';
import { Resource } from 'src/models/Resource';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
  standalone: true,
  imports: [MatButtonModule, ResourceDropdownComponent],
})
export class GameControlComponent {
  @Output() onPlayButtonClick = new EventEmitter();
  @Output() onSelectedOptionChange = new EventEmitter<Resource>();
}
