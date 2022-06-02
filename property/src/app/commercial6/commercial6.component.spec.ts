import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commercial6Component } from './commercial6.component';

describe('Commercial6Component', () => {
  let component: Commercial6Component;
  let fixture: ComponentFixture<Commercial6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commercial6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Commercial6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
