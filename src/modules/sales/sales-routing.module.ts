import { ViewsalesComponent } from './viewsales/viewsales.component';
import { RegistersalesComponent } from './registersales/registersales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registersales', component: RegistersalesComponent },
      { path: 'viewsales', component: ViewsalesComponent },
      { path: '**', redirectTo: 'registersales' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
