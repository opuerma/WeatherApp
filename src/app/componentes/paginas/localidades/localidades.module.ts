import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetallesLocalidadComponent } from './detalles-localidad/detalles-localidad.component';
import { ListaLocalidadesComponent } from './lista-localidades/lista-localidades.component';
import { LocalidadComponent } from './localidad.component';
import { ProximasHorasComponent } from '@app/compartido/componentes/proximas-horas/proximas-horas.component';

const myComponents = [
  DetallesLocalidadComponent,
  ListaLocalidadesComponent,
  LocalidadComponent,
  ProximasHorasComponent
];


@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents]
})
export class LocalidadesModule { }
