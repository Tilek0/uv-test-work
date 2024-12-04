import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendChooseTypeModalComponentNEW } from './extend-choose-type-modal.component';

describe('ExtendChooseTypeModalComponentNEW', () => {
  let component: ExtendChooseTypeModalComponentNEW;
  let fixture: ComponentFixture<ExtendChooseTypeModalComponentNEW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtendChooseTypeModalComponentNEW],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendChooseTypeModalComponentNEW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
