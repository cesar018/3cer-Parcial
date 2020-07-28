import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { TipoComponent } from './tipo/tipo.component';
import { VendedorComponent } from './vendedor/vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    AlquilerComponent,
    ClienteComponent,
    HabitacionComponent,
    TipoComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
