import { Routes } from '@angular/router';
import { EpisodesGridComponent } from './components/episodes-grid/episodes-grid.component'

export const routes: Routes = [
    {
        path: '',
        component: EpisodesGridComponent
    },
    {
        path: 'dmca',
        loadComponent: () => import('./components/legal/dmca/dmca-page.component').then(m => m.DmcaPageComponent)
    },
    {
        path: 'privacy',
        loadComponent: () => import('./components/legal/privacy/privacy-page.component').then(m => m.PrivacyPageComponent)
    },
    {
        path: 'terms',
        loadComponent: () => import('./components/legal/terms/terms-page.component').then(m => m.TermsPageComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
