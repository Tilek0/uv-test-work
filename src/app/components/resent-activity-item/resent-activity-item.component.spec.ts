import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentActivityItemComponent } from './resent-activity-item.component';

describe('ResentActivityItemComponent', () => {
  let component: ResentActivityItemComponent;
  let fixture: ComponentFixture<ResentActivityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResentActivityItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResentActivityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
