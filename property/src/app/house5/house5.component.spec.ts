import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House5Component } from './house5.component';

describe('House5Component', () => {
  let component: House5Component;
  let fixture: ComponentFixture<House5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ House5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(House5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
