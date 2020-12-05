import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'addcountry', component: CountryFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
