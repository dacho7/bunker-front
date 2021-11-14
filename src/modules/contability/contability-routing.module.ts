import { AdministrationComponent } from './administration/administration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'administration', component: AdministrationComponent },
      { path: '**', redirectTo: 'administration' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContabilityRoutingModule {}
