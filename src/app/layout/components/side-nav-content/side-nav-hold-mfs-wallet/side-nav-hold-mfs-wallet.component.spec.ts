import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavHoldMFSWalletComponent } from './side-nav-hold-mfs-wallet.component';

describe('SideNavHoldMFSWalletComponent', () => {
  let component: SideNavHoldMFSWalletComponent;
  let fixture: ComponentFixture<SideNavHoldMFSWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavHoldMFSWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavHoldMFSWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
