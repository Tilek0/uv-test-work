import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvLoreComponent } from './uv-lore.component';

describe('UvLoreComponent', () => {
  let component: UvLoreComponent;
  let fixture: ComponentFixture<UvLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UvLoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
