import { Routes, RouterModule } from '@angular/router';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PartnerHomeComponent } from './partner-home.component';


const partnerRoutes: Routes = [
  { path: 'partner', component: PartnerHomeComponent, pathMatch: 'full' },
  { path: 'partner/new', component: PartnerFormComponent},
  { path: 'partner/:id', component: PartnerFormComponent}
];

export const partnerRouting = RouterModule.forChild(partnerRoutes);