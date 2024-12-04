import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeVerticalComponent } from './tree-vertical.component';

describe('TreeVerticalComponent', () => {
  let component: TreeVerticalComponent;
  let fixture: ComponentFixture<TreeVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeVerticalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
