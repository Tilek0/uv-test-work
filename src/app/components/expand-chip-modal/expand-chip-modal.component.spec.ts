import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandChipModal } from './expand-chip-modal.component';

describe('ExtendChooseTypeModalComponentNEW', () => {
  let component: ExpandChipModal;
  let fixture: ComponentFixture<ExpandChipModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandChipModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandChipModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
