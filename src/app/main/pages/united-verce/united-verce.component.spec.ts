import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedVerceComponent } from './united-verce.component';

describe('UnitedVerceComponent', () => {
  let component: UnitedVerceComponent;
  let fixture: ComponentFixture<UnitedVerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitedVerceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedVerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
