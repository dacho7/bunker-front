import { RegistersupplieComponent } from './registersupplie/registersupplie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registersupplie',
        component: RegistersupplieComponent,
      },
      {
        path: '**',
        redirectTo: 'registersupplie',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliesRoutingModule {}
