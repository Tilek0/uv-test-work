import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSwapHmfsOnMfsComponent } from './side-nav-swap-hmfs-on-mfs.component';

describe('SideNavSwapHmfsOnMfsComponent', () => {
  let component: SideNavSwapHmfsOnMfsComponent;
  let fixture: ComponentFixture<SideNavSwapHmfsOnMfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavSwapHmfsOnMfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSwapHmfsOnMfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
