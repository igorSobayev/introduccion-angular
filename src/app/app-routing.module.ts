import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  // Ruta para el equipo y le añadimos un parámetro para ofrecer información sobre cada uno
  { path: 'equipo/:id', component: EquipoComponent },
  // configuro rutas para el inicio
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
