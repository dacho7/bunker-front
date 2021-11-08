import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliesRoutingModule } from './supplies-routing.module';
import { RegistersupplieComponent } from './registersupplie/registersupplie.component';

@NgModule({
  declarations: [RegistersupplieComponent],
  imports: [CommonModule, SuppliesRoutingModule, FormsModule],
})
export class SuppliesModule {}
