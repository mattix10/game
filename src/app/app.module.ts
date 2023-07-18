import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './shared/app.state';
import { PersonCardComponent } from './shared/components/person-card/person-card.component';
import { StarshipCardComponent } from './shared/components/starship-card/starship-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlayerInfoComponent } from './shared/components/player-info/player-info.component';
import { DrawnNumbersComponent } from './shared/components/drawn-numbers/drawn-numbers.component';
import { GameControlComponent } from './shared/components/game-control/game-control.component';
import { InfoWrapperComponent } from './shared/components/info-wrapper/info-wrapper.component';
import { WinnerBarComponent } from './shared/components/winner-bar/winner-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    StarshipCardComponent,
    PlayerInfoComponent,
    DrawnNumbersComponent,
    InfoWrapperComponent,
    WinnerBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GameControlComponent,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    NgxsModule.forRoot([AppState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
