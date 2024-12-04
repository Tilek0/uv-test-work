import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityDetailsComponent } from './recent-activity-details.component';

describe('RecentActivityDetailsComponent', () => {
  let component: RecentActivityDetailsComponent;
  let fixture: ComponentFixture<RecentActivityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentActivityDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
