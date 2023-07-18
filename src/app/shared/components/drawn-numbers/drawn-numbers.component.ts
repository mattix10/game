import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawn-numbers',
  templateUrl: './drawn-numbers.component.html',
  styleUrls: ['./drawn-numbers.component.scss'],
})
export class DrawnNumbersComponent {
  @Input() drawnNumbers: number[] = [];
}
