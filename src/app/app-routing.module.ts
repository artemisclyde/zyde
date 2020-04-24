import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainColumnsComponent } from './main-columns/main-columns.component';


const routes: Routes = [
  { path: 'main', component: MainColumnsComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
