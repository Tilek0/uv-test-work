import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaShortInfoComponent } from './delta-short-info.component';

describe('DeltaShortInfoComponent', () => {
  let component: DeltaShortInfoComponent;
  let fixture: ComponentFixture<DeltaShortInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeltaShortInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
