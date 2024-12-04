import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHmfsConfimModalComponent } from './get-hmfs-confim-modal.component';

describe('GetHmfsConfimModalComponent', () => {
  let component: GetHmfsConfimModalComponent;
  let fixture: ComponentFixture<GetHmfsConfimModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHmfsConfimModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHmfsConfimModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
