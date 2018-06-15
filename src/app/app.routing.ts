import { Routes, RouterModule } from '@angular/router';
import {FormListComponent} from "./form-list/form-list.component";
const appRoutes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full'},
  { path: 'forms', component: FormListComponent},
  { path: '**', component: FormListComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
