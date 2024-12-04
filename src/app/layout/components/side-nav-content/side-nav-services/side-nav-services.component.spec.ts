import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavServicesComponent } from './side-nav-services.component';

describe('ServicesComponent', () => {
  let component: SideNavServicesComponent;
  let fixture: ComponentFixture<SideNavServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavServicesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
