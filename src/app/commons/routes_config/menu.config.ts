import { PartnerHomeComponent } from '../../crud/partner-home/partner-home.component';
import { Routes } from '@angular/router';

export const routerConfig: Routes = [
    {
        path: 'partner',
        component: PartnerHomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];