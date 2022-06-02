import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commercial5Component } from './commercial5.component';

describe('Commercial5Component', () => {
  let component: Commercial5Component;
  let fixture: ComponentFixture<Commercial5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commercial5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Commercial5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
