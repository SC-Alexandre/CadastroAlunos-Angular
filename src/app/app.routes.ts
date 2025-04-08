import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InfoProjetoComponent } from './info-projeto/info-projeto.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'info', component: InfoProjetoComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' }
];
