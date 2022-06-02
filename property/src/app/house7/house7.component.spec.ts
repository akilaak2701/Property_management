import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House7Component } from './house7.component';

describe('House7Component', () => {
  let component: House7Component;
  let fixture: ComponentFixture<House7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
