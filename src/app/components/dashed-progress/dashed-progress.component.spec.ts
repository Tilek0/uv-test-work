import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedProgressComponent } from './dashed-progress.component';

describe('DashedProgressComponent', () => {
  let component: DashedProgressComponent;
  let fixture: ComponentFixture<DashedProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashedProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashedProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
