import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeWaveModal } from './upgrade-wave-modal.component';

describe('UpgradeWaveModal', () => {
  let component: UpgradeWaveModal;
  let fixture: ComponentFixture<UpgradeWaveModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpgradeWaveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeWaveModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
