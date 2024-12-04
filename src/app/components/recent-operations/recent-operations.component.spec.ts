import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOperationsComponent } from './recent-operations.component';

describe('RecentOperationsComponent', () => {
  let component: RecentOperationsComponent;
  let fixture: ComponentFixture<RecentOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentOperationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
