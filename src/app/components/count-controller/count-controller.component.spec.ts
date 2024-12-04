import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountControllerComponent } from './count-controller.component';

describe('CountControllerComponent', () => {
  let component: CountControllerComponent;
  let fixture: ComponentFixture<CountControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountControllerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
