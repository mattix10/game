import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-winner-bar',
  templateUrl: './winner-bar.component.html',
  styleUrls: ['./winner-bar.component.scss'],
})
export class WinnerBarComponent {
  @Input() winner: string | null = '';
}
