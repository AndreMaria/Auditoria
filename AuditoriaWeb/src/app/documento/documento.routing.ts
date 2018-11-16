import { Routes, RouterModule } from '@angular/router';

import { DocumentoComponent } from './documento.component';
import { DocumentoFormComponent } from "./documento-form/documento-form.component";
import { DocumentoFormEditComponent } from "./documento-form-edit/documento-form-edit.component";

const docRoutes: Routes = [
  { path: 'documento', component: DocumentoComponent},
  { path: 'documento/novo', component: DocumentoFormComponent},
  { path: 'documento/edit/:id', component:DocumentoFormEditComponent }
];

export const docRouting = RouterModule.forChild(docRoutes);
