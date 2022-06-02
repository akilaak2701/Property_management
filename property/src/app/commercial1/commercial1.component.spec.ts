import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commercial1Component } from './commercial1.component';

describe('Commercial1Component', () => {
  let component: Commercial1Component;
  let fixture: ComponentFixture<Commercial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commercial1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Commercial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
