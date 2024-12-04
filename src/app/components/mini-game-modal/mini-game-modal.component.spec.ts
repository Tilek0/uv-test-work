import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGameModalComponent } from './mini-game-modal.component';

describe('MiniGameModalComponent', () => {
  let component: MiniGameModalComponent;
  let fixture: ComponentFixture<MiniGameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniGameModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
