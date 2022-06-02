import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanenceReqComponent } from './maintanence-req.component';

describe('MaintanenceReqComponent', () => {
  let component: MaintanenceReqComponent;
  let fixture: ComponentFixture<MaintanenceReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintanenceReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintanenceReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
