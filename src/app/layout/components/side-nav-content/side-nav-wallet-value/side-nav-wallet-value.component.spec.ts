import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavWalletValueComponent } from './side-nav-wallet-value.component';

describe('SideNavWalletValueComponent', () => {
  let component: SideNavWalletValueComponent;
  let fixture: ComponentFixture<SideNavWalletValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavWalletValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWalletValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
