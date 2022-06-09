import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcontactformComponent } from './getcontactform.component';

describe('GetcontactformComponent', () => {
  let component: GetcontactformComponent;
  let fixture: ComponentFixture<GetcontactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcontactformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcontactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
