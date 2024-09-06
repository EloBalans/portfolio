import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'HomePage' },
  },
  {
    path: 'me',
    loadComponent: () =>
      import('./core/aboutme/aboutme.component').then(
        (m) => m.AboutmeComponent,
      ),
    data: { animation: 'AboutMePage' },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./core/projects/projects.component').then(
        (m) => m.ProjectsComponent,
      ),
    data: { animation: 'ProjectsPage' },
  },
  // {
  //   path: 'blog',
  //   loadComponent: () =>
  //     import(
  //       './core/blog/blog.component'
  //       ).then((m) => m.BlogComponent),
  // }
];
