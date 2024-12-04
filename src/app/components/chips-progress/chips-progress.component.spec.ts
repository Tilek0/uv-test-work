import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsProgressComponent } from './chips-progress.component';

describe('ChipsProgressComponent', () => {
  let component: ChipsProgressComponent;
  let fixture: ComponentFixture<ChipsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
