import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House8Component } from './house8.component';

describe('House8Component', () => {
  let component: House8Component;
  let fixture: ComponentFixture<House8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
