import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSocialComponent } from './side-nav-social.component';

describe('SideNavSocialComponent', () => {
  let component: SideNavSocialComponent;
  let fixture: ComponentFixture<SideNavSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavSocialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
