import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpostpropComponent } from './dashpostprop.component';

describe('DashpostpropComponent', () => {
  let component: DashpostpropComponent;
  let fixture: ComponentFixture<DashpostpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashpostpropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashpostpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
