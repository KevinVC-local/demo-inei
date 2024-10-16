import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent, children: [
    { path: 'home', loadComponent: () => import('./pages/start-page/start-page.component').then(m => m.StartPageComponent) },
    {path: 'about', loadComponent: () => import('./pages/about-us-page/about-us-page.component').then(m => m.AboutUsPageComponent)},
    {path: 'study', loadComponent: () => import('./pages/study-page/study-page.component').then(m => m.StudyPageComponent)},
    {path: 'companies', loadComponent: () => import('./pages/companies-page/companies-page.component').then(m => m.CompaniesPageComponent)},
    {path: 'work-with-me', loadComponent: () => import('./pages/work-inel-page/work-inel-page.component').then(m => m.WorkInelPageComponent)},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
