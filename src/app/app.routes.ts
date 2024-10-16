import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./presentation/public/public.module').then(m => m.PublicModule)},
    {path: '**', redirectTo: '/'}
];
