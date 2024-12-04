import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavHoldMFSComponent } from './side-nav-hold-mfs.component';

describe('SideNavHoldMFSComponent', () => {
  let component: SideNavHoldMFSComponent;
  let fixture: ComponentFixture<SideNavHoldMFSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavHoldMFSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavHoldMFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
