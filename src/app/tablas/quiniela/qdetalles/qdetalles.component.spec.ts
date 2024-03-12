import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdetallesComponent } from './qdetalles.component';

describe('QdetallesComponent', () => {
  let component: QdetallesComponent;
  let fixture: ComponentFixture<QdetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QdetallesComponent]
    });
    fixture = TestBed.createComponent(QdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
