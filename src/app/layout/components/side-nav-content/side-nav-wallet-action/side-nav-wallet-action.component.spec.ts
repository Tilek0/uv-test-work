import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletActionComponent } from './side-nav-wallet-action.component';

describe('SideNavWalletActionComponent', () => {
  let component: SideNavWalletActionComponent;
  let fixture: ComponentFixture<SideNavWalletActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletActionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
