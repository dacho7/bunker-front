import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContabilityRoutingModule } from './contability-routing.module';
import { AdministrationComponent } from './administration/administration.component';


@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    ContabilityRoutingModule
  ]
})
export class ContabilityModule { }
