import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import(
        './core/home/home.component'
        ).then((m) => m.HomeComponent),
  },
  {
    path: 'me',
    loadComponent: () =>
      import(
        './core/aboutme/aboutme.component'
        ).then((m) => m.AboutmeComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import(
        './core/projects/projects.component'
        ).then((m) => m.ProjectsComponent),
  },
  // {
  //   path: 'blog',
  //   loadComponent: () =>
  //     import(
  //       './core/blog/blog.component'
  //       ).then((m) => m.BlogComponent),
  // }
];
