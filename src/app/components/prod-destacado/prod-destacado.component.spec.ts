import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDestacadoComponent } from './prod-destacado.component';

describe('ProdDestacadoComponent', () => {
  let component: ProdDestacadoComponent;
  let fixture: ComponentFixture<ProdDestacadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDestacadoComponent]
    });
    fixture = TestBed.createComponent(ProdDestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
