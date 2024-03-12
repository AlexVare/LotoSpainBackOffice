import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitivaComponent } from './primitiva.component';

describe('PrimitivaComponent', () => {
  let component: PrimitivaComponent;
  let fixture: ComponentFixture<PrimitivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimitivaComponent]
    });
    fixture = TestBed.createComponent(PrimitivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
