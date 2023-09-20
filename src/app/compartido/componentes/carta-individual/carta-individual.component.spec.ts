import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaIndividualComponent } from './carta-individual.component';

describe('CartaIndividualComponent', () => {
  let component: CartaIndividualComponent;
  let fixture: ComponentFixture<CartaIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaIndividualComponent]
    });
    fixture = TestBed.createComponent(CartaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
