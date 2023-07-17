import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './shared/app.state';
import { ResourceDropdownComponent } from './shared/components/resource-dropdown/resource-dropdown.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ResourceDropdownComponent,
    NgxsModule.forRoot([AppState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
