import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasescondicionesComponent } from './basescondiciones.component';

describe('BasescondicionesComponent', () => {
  let component: BasescondicionesComponent;
  let fixture: ComponentFixture<BasescondicionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasescondicionesComponent]
    });
    fixture = TestBed.createComponent(BasescondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
