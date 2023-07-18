import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './shared/app.state';
import { ResourceDropdownComponent } from './shared/components/resource-dropdown/resource-dropdown.component';
import { MatButtonModule } from '@angular/material/button';
import { PersonCardComponent } from './shared/components/person-card/person-card.component';
import { StarshipCardComponent } from './shared/components/starship-card/starship-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlayerInfoComponent } from './shared/components/player-info/player-info.component';
@NgModule({
  declarations: [AppComponent, PersonCardComponent, StarshipCardComponent, PlayerInfoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ResourceDropdownComponent,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    NgxsModule.forRoot([AppState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
