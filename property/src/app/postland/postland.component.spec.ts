import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlandComponent } from './postland.component';

describe('PostlandComponent', () => {
  let component: PostlandComponent;
  let fixture: ComponentFixture<PostlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
