import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtypeComponent } from './formtype.component';

describe('FormtypeComponent', () => {
  let component: FormtypeComponent;
  let fixture: ComponentFixture<FormtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
