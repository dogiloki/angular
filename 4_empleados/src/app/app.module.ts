import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Usar formularios
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Usar formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
