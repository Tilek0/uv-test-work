import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableChip } from './expandable-chip.component';

describe('LevelItemComponentChip', () => {
  let component: ExpandableChip;
  let fixture: ComponentFixture<ExpandableChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandableChip],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
