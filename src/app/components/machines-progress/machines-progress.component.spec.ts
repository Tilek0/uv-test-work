import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesProgressComponent } from './machines-progress.component';

describe('MachinesProgressComponent', () => {
  let component: MachinesProgressComponent;
  let fixture: ComponentFixture<MachinesProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachinesProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
