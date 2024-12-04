import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBuybackOfferPriceModal } from './confirm-buyback-offer-price-modal.component';

describe('ExtendChooseTypeModalComponentNEW', () => {
  let component: ConfirmBuybackOfferPriceModal;
  let fixture: ComponentFixture<ConfirmBuybackOfferPriceModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmBuybackOfferPriceModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBuybackOfferPriceModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
