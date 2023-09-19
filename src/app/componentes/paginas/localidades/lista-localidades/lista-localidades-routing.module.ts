import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLocalidadesComponent } from './lista-localidades.component';

const routes: Routes = [{ path: '', component: ListaLocalidadesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaLocalidadesRoutingModule { }
