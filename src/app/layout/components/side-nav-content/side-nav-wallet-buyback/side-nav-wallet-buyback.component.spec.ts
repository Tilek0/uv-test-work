import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletBuybackComponent } from './side-nav-wallet-buyback.component';

describe('SideNavWalletBuybackComponent', () => {
  let component: SideNavWalletBuybackComponent;
  let fixture: ComponentFixture<SideNavWalletBuybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletBuybackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletBuybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
