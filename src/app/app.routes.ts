import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [() => !inject(AuthService).isLoggedIn],
  },
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
    // canActivate: [() => inject(AuthService).isLoggedIn],
  },
  {
    path: '**',
    component: AuthComponent,
  },
];
