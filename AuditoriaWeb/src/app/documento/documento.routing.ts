import { Routes, RouterModule } from '@angular/router';

import { DocumentoComponent } from './documento.component';
import { DocumentoFormComponent } from "./documento-form/documento-form.component";

const docRoutes: Routes = [
  { path: 'documento', component: DocumentoComponent},
  { path: 'documento/novo', component: DocumentoFormComponent}
];

export const docRouting = RouterModule.forChild(docRoutes);
