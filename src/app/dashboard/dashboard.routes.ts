import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthComponent } from '../auth/auth.component';

export const DASHBOARD_ROUTES: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
];
