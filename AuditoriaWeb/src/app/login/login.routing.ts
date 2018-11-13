import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LogoffComponent } from './logoff/logoff.component';


const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/off', component: LogoffComponent}
];

export const loginRouting = RouterModule.forChild(loginRoutes);
