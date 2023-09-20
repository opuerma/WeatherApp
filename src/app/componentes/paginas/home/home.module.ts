import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LocalidadesModule } from '../localidades/localidades.module';
import { CartaIndividualComponent } from '@app/compartido/componentes/carta-individual/carta-individual.component';


@NgModule({
  declarations: [
    HomeComponent,
    CartaIndividualComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LocalidadesModule
  ],
  exports: [
    CartaIndividualComponent
  ]
})
export class HomeModule { }
