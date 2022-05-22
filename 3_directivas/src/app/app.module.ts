import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para trabajar con formularios
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Para trabajar con formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
