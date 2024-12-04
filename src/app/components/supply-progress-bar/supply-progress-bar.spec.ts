import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyProgressBarComponent } from './supply-progress-bar.component';

describe('TotalChartComponent', () => {
  let component: SupplyProgressBarComponent;
  let fixture: ComponentFixture<SupplyProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplyProgressBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
