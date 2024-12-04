import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletBuybackOfferPriceComponent } from './side-nav-wallet-buyback-offer-price.component';

describe('SideNavWalletBuybackOfferPriceComponent', () => {
  let component: SideNavWalletBuybackOfferPriceComponent;
  let fixture: ComponentFixture<SideNavWalletBuybackOfferPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletBuybackOfferPriceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletBuybackOfferPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
