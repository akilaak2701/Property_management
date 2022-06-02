import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House4Component } from './house4.component';

describe('House4Component', () => {
  let component: House4Component;
  let fixture: ComponentFixture<House4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
