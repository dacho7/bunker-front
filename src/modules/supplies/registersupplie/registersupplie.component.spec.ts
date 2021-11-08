import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersupplieComponent } from './registersupplie.component';

describe('RegistersupplieComponent', () => {
  let component: RegistersupplieComponent;
  let fixture: ComponentFixture<RegistersupplieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersupplieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersupplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
