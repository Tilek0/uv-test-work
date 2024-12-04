import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletVestingComponent } from './side-nav-wallet-vesting.component';

describe('SideNavWalletVestingComponent', () => {
  let component: SideNavWalletVestingComponent;
  let fixture: ComponentFixture<SideNavWalletVestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletVestingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletVestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
