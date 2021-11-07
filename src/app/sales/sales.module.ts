import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { RegistersalesComponent } from './registersales/registersales.component';

@NgModule({
  declarations: [RegistersalesComponent],
  imports: [CommonModule, SalesRoutingModule, FormsModule],
})
export class SalesModule {}
