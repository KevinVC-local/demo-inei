import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./pages/layout/layout.component').then(m => m.LayoutComponent)},
    {path: '**', redirectTo: '/'}
];
