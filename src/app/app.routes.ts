import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './features/portfolio/portfolio.component'
      ).then((m) => m.PortfolioComponent),
  },
  {
    path: '**',
    redirectTo: '',
    // loadComponent: () => import('./core/pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
];
