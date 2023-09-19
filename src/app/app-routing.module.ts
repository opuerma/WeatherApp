import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'home',
    loadChildren: () =>
      import('./componentes/paginas/home/home.module').then(m => m.HomeModule)
  },
  { path: 'lista-localidades',
    loadChildren: () =>
      import('./componentes/paginas/localidades/lista-localidades/lista-localidades.module').then(m => m.ListaLocalidadesModule)
  },
  { path: 'detalles-localidad/:id',
      loadChildren: () =>
      import('./componentes/paginas/localidades/detalles-localidad/detalles-localidad.module').then(m => m.DetallesLocalidadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
