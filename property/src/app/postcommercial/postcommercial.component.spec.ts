import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcommercialComponent } from './postcommercial.component';

describe('PostcommercialComponent', () => {
  let component: PostcommercialComponent;
  let fixture: ComponentFixture<PostcommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
