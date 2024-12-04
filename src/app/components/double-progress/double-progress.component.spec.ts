import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleProgressComponent } from './double-progress.component';

describe('DoubleProgressComponent', () => {
  let component: DoubleProgressComponent;
  let fixture: ComponentFixture<DoubleProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
