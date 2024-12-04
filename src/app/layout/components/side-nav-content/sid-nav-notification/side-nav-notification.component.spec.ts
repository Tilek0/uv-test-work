import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavNotificationComponent } from './side-nav-notification.component';

describe('SidNavNotificationComponent', () => {
  let component: SideNavNotificationComponent;
  let fixture: ComponentFixture<SideNavNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavNotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
