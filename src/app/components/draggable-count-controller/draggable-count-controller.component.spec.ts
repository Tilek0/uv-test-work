import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableCountControllerComponent } from './draggable-count-controller.component';

describe('DraggableCountControllerComponent', () => {
  let component: DraggableCountControllerComponent;
  let fixture: ComponentFixture<DraggableCountControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableCountControllerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableCountControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
