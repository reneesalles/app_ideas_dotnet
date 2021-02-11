import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerHomeComponent } from './beginner-home.component';

describe('BeginnerHomeComponent', () => {
  let component: BeginnerHomeComponent;
  let fixture: ComponentFixture<BeginnerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
