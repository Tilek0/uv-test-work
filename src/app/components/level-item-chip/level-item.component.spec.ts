import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelItemComponentChip } from './level-item.component';

describe('LevelItemComponentChip', () => {
  let component: LevelItemComponentChip;
  let fixture: ComponentFixture<LevelItemComponentChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelItemComponentChip],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelItemComponentChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
