import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotActivatedLevelComponent } from './not-activated-level.component';

describe('NotActivatedLevelComponent', () => {
  let component: NotActivatedLevelComponent;
  let fixture: ComponentFixture<NotActivatedLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotActivatedLevelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotActivatedLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
