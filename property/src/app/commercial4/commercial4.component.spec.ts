import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commercial4Component } from './commercial4.component';

describe('Commercial4Component', () => {
  let component: Commercial4Component;
  let fixture: ComponentFixture<Commercial4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commercial4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Commercial4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
