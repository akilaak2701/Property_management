import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalapplicationComponent } from './rentalapplication.component';

describe('RentalapplicationComponent', () => {
  let component: RentalapplicationComponent;
  let fixture: ComponentFixture<RentalapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
