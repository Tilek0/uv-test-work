import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeChipModal } from './upgrade-chip-modal.component';

describe('UpgradeChipModalComponent', () => {
  let component: UpgradeChipModal;
  let fixture: ComponentFixture<UpgradeChipModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpgradeChipModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeChipModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
