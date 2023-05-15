import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclageComponent } from './recyclage.component';

describe('RecyclageComponent', () => {
  let component: RecyclageComponent;
  let fixture: ComponentFixture<RecyclageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecyclageComponent]
    });
    fixture = TestBed.createComponent(RecyclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
