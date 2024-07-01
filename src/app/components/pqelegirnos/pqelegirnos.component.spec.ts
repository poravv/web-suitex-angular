import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqelegirnosComponent } from './pqelegirnos.component';

describe('PqelegirnosComponent', () => {
  let component: PqelegirnosComponent;
  let fixture: ComponentFixture<PqelegirnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqelegirnosComponent]
    });
    fixture = TestBed.createComponent(PqelegirnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
