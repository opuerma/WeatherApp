import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocalidadesComponent } from './lista-localidades.component';

describe('ListaLocalidadesComponent', () => {
  let component: ListaLocalidadesComponent;
  let fixture: ComponentFixture<ListaLocalidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLocalidadesComponent]
    });
    fixture = TestBed.createComponent(ListaLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
