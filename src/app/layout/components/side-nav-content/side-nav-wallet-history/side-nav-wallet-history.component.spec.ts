import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletHistoryComponent } from './side-nav-wallet-history.component';

describe('SideNavWalletHistoryComponent', () => {
  let component: SideNavWalletHistoryComponent;
  let fixture: ComponentFixture<SideNavWalletHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletHistoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
