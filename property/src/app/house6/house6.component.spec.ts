import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House6Component } from './house6.component';

describe('House6Component', () => {
  let component: House6Component;
  let fixture: ComponentFixture<House6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
