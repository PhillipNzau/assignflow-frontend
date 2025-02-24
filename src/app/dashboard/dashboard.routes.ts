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
      {
        path: 'assignments',
        loadComponent: () =>
          import('./assignments/assignments.component').then(
            (m) => m.AssignmentsComponent
          ),
      },
      {
        path: 'assignments/create',
        loadComponent: () =>
          import(
            './assignments/components/create-assignements/create-assignements.component'
          ).then((m) => m.CreateAssignementsComponent),
      },
      {
        path: 'assignments/:id',
        loadComponent: () =>
          import(
            './assignments/components/view-assignment/view-assignment.component'
          ).then((m) => m.ViewAssignmentComponent),
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'payments',
        loadComponent: () =>
          import('./payments/payments.component').then(
            (m) => m.PaymentsComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          ),
      },
      {
        path: 'print',
        loadComponent: () =>
          import('./print/print.component').then((m) => m.PrintComponent),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
