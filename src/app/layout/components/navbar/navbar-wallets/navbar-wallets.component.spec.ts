import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWalletsComponent } from './navbar-wallets.component';

describe('NavbarWalletsComponent', () => {
  let component: NavbarWalletsComponent;
  let fixture: ComponentFixture<NavbarWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarWalletsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
