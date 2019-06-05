import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppTimerComponent} from './timer.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTimerComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
