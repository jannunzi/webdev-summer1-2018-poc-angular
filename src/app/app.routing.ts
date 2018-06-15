import { Routes, RouterModule } from '@angular/router';
import {FormListComponent} from "./form-list/form-list.component";
import {FormFillComponent} from "./form-fill/form-fill.component";
const appRoutes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full'},
  { path: 'forms', component: FormListComponent},
  { path: 'form/:formId/fill', component: FormFillComponent},
  { path: '**', component: FormListComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
