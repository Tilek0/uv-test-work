import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBuybackModal } from './confirm-buyback-modal.component';

describe('ExtendChooseTypeModalComponentNEW', () => {
  let component: ConfirmBuybackModal;
  let fixture: ComponentFixture<ConfirmBuybackModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmBuybackModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBuybackModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
