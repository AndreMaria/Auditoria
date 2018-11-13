import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";

const userRoutes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/novo', component: UsuarioFormComponent}
];

export const userRouting = RouterModule.forChild(userRoutes);
