import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstboxComponent } from './firstbox.component';

describe('FirstboxComponent', () => {
  let component: FirstboxComponent;
  let fixture: ComponentFixture<FirstboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstboxComponent]
    });
    fixture = TestBed.createComponent(FirstboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
