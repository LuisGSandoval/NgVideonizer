import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarContratoComponent } from './pagar-contrato.component';

describe('PagarContratoComponent', () => {
  let component: PagarContratoComponent;
  let fixture: ComponentFixture<PagarContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
