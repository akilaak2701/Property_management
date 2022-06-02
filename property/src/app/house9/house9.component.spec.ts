import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House9Component } from './house9.component';

describe('House9Component', () => {
  let component: House9Component;
  let fixture: ComponentFixture<House9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
