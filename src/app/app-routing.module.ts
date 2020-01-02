import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultDetailsComponent } from './result-details/result-details.component';

const routes: Routes = [
  { path: '', component: SearchBarComponent },
  { path: 'search', component: ResultDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }