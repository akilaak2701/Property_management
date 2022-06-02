import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsignupComponent } from './dashsignup.component';

describe('DashsignupComponent', () => {
  let component: DashsignupComponent;
  let fixture: ComponentFixture<DashsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
