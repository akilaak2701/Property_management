import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcontactloginComponent } from './getcontactlogin.component';

describe('GetcontactloginComponent', () => {
  let component: GetcontactloginComponent;
  let fixture: ComponentFixture<GetcontactloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcontactloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcontactloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
