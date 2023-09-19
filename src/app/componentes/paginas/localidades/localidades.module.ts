import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetallesLocalidadComponent } from './detalles-localidad/detalles-localidad.component';
import { ListaLocalidadesComponent } from './lista-localidades/lista-localidades.component';
import { LocalidadComponent } from './localidad.component';

const myComponents = [DetallesLocalidadComponent, ListaLocalidadesComponent, LocalidadComponent];


@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents]
})
export class LocalidadesModule { }
