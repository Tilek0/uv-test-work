import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperInputComponent } from './steper-input.component';

describe('SteperInputComponent', () => {
  let component: SteperInputComponent;
  let fixture: ComponentFixture<SteperInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteperInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteperInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
