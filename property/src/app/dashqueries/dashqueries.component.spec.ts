import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashqueriesComponent } from './dashqueries.component';

describe('DashqueriesComponent', () => {
  let component: DashqueriesComponent;
  let fixture: ComponentFixture<DashqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashqueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
