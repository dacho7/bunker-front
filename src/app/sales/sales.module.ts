import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SalesRoutingModule } from './sales-routing.module';
import { RegistersalesComponent } from './registersales/registersales.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControlName,
} from '@angular/forms';

@NgModule({
  declarations: [RegistersalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlName,
  ],
})
export class SalesModule {}
