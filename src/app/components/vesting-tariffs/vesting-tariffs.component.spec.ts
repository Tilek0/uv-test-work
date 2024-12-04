import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestingTariffsComponent } from './vesting-tariffs.component';

describe('VestingTariffsComponent', () => {
  let component: VestingTariffsComponent;
  let fixture: ComponentFixture<VestingTariffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VestingTariffsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestingTariffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
