import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletSellComponent } from './side-nav-wallet-sell.component';

describe('SideNavWalletSellComponent', () => {
  let component: SideNavWalletSellComponent;
  let fixture: ComponentFixture<SideNavWalletSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletSellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
