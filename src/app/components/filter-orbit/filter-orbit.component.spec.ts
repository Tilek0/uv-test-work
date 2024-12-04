import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOrbitComponent } from './filter-orbit.component';

describe('FilterOrbitComponent', () => {
  let component: FilterOrbitComponent;
  let fixture: ComponentFixture<FilterOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterOrbitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
