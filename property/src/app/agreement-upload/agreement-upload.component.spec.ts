import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementUploadComponent } from './agreement-upload.component';

describe('AgreementUploadComponent', () => {
  let component: AgreementUploadComponent;
  let fixture: ComponentFixture<AgreementUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
