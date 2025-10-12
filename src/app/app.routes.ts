import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './features/portfolio/pages/portfolio-page/portfolio-page.component'
      ).then((m) => m.PortfolioPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
    // loadComponent: () => import('./core/pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
];
