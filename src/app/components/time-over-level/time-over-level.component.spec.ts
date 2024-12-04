import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOverLevelComponent } from './time-over-level.component';

describe('TimeOverLevelComponent', () => {
  let component: TimeOverLevelComponent;
  let fixture: ComponentFixture<TimeOverLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeOverLevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOverLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
