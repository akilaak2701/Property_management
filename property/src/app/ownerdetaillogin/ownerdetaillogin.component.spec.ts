import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerdetailloginComponent } from './ownerdetaillogin.component';

describe('OwnerdetailloginComponent', () => {
  let component: OwnerdetailloginComponent;
  let fixture: ComponentFixture<OwnerdetailloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerdetailloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerdetailloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
