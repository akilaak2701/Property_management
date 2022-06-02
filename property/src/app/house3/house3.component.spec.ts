import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House3Component } from './house3.component';

describe('House3Component', () => {
  let component: House3Component;
  let fixture: ComponentFixture<House3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
