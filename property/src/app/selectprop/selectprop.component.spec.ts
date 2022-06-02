import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpropComponent } from './selectprop.component';

describe('SelectpropComponent', () => {
  let component: SelectpropComponent;
  let fixture: ComponentFixture<SelectpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
