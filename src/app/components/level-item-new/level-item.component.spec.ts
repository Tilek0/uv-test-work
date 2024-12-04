import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelItemComponentNEW } from './level-item.component';

describe('LevelItemComponentNEW', () => {
  let component: LevelItemComponentNEW;
  let fixture: ComponentFixture<LevelItemComponentNEW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelItemComponentNEW],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelItemComponentNEW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
