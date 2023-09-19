import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLocalidadComponent } from './detalles-localidad.component';

describe('DetallesLocalidadComponent', () => {
  let component: DetallesLocalidadComponent;
  let fixture: ComponentFixture<DetallesLocalidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesLocalidadComponent]
    });
    fixture = TestBed.createComponent(DetallesLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
