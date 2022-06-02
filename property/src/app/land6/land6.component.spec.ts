import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Land6Component } from './land6.component';

describe('Land6Component', () => {
  let component: Land6Component;
  let fixture: ComponentFixture<Land6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Land6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Land6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
