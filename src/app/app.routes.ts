import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./features/auth/components/login/login').then(c => c.Login),

    },
     {
        path: 'projects',
        loadComponent: () =>
            import('./features/projects/pages/projects/projects').then(c => c.Projects),
    },
     {
        path: '**',
        redirectTo: 'login'
    }
];
