import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidProgressComponent } from './liquid-progress.component';

describe('LiquidProgressComponent', () => {
  let component: LiquidProgressComponent;
  let fixture: ComponentFixture<LiquidProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
