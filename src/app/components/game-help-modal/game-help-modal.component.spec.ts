import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHelpModal } from './game-help-modal.component';

describe('GameHelpModal', () => {
  let component: GameHelpModal;
  let fixture: ComponentFixture<GameHelpModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameHelpModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHelpModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
