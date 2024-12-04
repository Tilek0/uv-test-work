import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelListsComponent } from './level-lists.component';

describe('LevelListsComponent', () => {
  let component: LevelListsComponent;
  let fixture: ComponentFixture<LevelListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelListsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
