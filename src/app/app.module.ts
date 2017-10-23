import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { OddContainerComponent } from './odd-container/odd-container.component';
import { EvenContainerComponent } from './even-container/even-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddContainerComponent,
	EvenContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
