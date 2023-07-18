import { Component, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-info-wrapper',
  templateUrl: './info-wrapper.component.html',
  styleUrls: ['./info-wrapper.component.scss'],
})
export class InfoWrapperComponent {
  @Select(AppState.loading) loading$!: Observable<boolean>;
  @Select(AppState.error) error$!: Observable<string | null>;
  @Input() drawnNumbers: number[] = [];
  initialText = "Select resource and click 'Play' button to start a game.";
}
