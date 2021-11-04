import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-suppliesproduct',
  templateUrl: './suppliesproduct.component.html',
  styleUrls: ['./suppliesproduct.component.css'],
})
export class SuppliesproductComponent {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor() {}
}
