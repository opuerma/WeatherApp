import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasHorasComponent } from './proximas-horas.component';

describe('ProximasHorasComponent', () => {
  let component: ProximasHorasComponent;
  let fixture: ComponentFixture<ProximasHorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximasHorasComponent]
    });
    fixture = TestBed.createComponent(ProximasHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
