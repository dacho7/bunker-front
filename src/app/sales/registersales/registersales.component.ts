import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registersales',
  templateUrl: './registersales.component.html',
  styleUrls: ['./registersales.component.css'],
})
export class RegistersalesComponent implements OnInit {
  myControl = new FormControl();
  descriptionProduct = '';
  allProducts: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}
