import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectposttypeComponent } from './selectposttype.component';

describe('SelectposttypeComponent', () => {
  let component: SelectposttypeComponent;
  let fixture: ComponentFixture<SelectposttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectposttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectposttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
