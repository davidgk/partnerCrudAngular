import { PartnerHomeComponent } from '../../crud/partner-home/partner-home.component';
import { Routes } from '@angular/router';
import { HomeComponent } from "app/home/home.component";

export const routerConfig: Routes = [
    {
        path: 'partner',
        component: PartnerHomeComponent
    },
     {
        path: 'home',
        component: HomeComponent
    }
];