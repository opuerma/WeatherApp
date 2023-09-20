import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DetallesLocalidadRoutingModule } from './detalles-localidad-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetallesLocalidadRoutingModule
  ],
  providers: [DatePipe]
})
export class DetallesLocalidadModule { }
