import { Component, Input } from '@angular/core';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss'],
})
export class PlayerInfoComponent {
  @Input() player!: Player;
}
