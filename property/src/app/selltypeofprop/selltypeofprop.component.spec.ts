import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelltypeofpropComponent } from './selltypeofprop.component';

describe('SelltypeofpropComponent', () => {
  let component: SelltypeofpropComponent;
  let fixture: ComponentFixture<SelltypeofpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelltypeofpropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelltypeofpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
