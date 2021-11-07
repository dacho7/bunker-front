import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersalesComponent } from './registersales.component';

describe('RegistersalesComponent', () => {
  let component: RegistersalesComponent;
  let fixture: ComponentFixture<RegistersalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
