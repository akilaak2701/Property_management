import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytypeofpropComponent } from './buytypeofprop.component';

describe('BuytypeofpropComponent', () => {
  let component: BuytypeofpropComponent;
  let fixture: ComponentFixture<BuytypeofpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuytypeofpropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuytypeofpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
