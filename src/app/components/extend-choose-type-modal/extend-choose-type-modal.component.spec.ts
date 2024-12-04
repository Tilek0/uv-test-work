import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendChooseTypeModalComponent } from './extend-choose-type-modal.component';

describe('ExtendChooseTypeModalComponent', () => {
  let component: ExtendChooseTypeModalComponent;
  let fixture: ComponentFixture<ExtendChooseTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtendChooseTypeModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendChooseTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
