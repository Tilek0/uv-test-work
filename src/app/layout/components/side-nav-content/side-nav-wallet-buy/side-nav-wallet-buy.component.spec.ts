import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletBuyComponent } from './side-nav-wallet-buy.component';

describe('SideNavWalletBuyComponent', () => {
  let component: SideNavWalletBuyComponent;
  let fixture: ComponentFixture<SideNavWalletBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletBuyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
