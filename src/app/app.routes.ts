import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(dash => dash.DashboardComponent)
    }, {
        path: 'data',
        loadComponent: () => import('./pages/data/data.component').then(dash => dash.DataComponent)
    }];
