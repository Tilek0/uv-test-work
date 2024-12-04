import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryProgressComponent } from './battery-progress.component';

describe('BatteryProgressComponent', () => {
  let component: BatteryProgressComponent;
  let fixture: ComponentFixture<BatteryProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatteryProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
