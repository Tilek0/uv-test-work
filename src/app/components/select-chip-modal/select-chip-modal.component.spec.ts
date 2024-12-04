import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChipModal } from './select-chip-modal.component';

describe('SelectChipModalComponent', () => {
  let component: SelectChipModal;
  let fixture: ComponentFixture<SelectChipModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectChipModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChipModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
