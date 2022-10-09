import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterApiCurrencyComponent } from './converter-api-currency.component';

describe('ConverterApiCurrencyComponent', () => {
  let component: ConverterApiCurrencyComponent;
  let fixture: ComponentFixture<ConverterApiCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterApiCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterApiCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
