import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceCoinComponent } from './force-coin.component';

describe('ForceCoinComponent', () => {
  let component: ForceCoinComponent;
  let fixture: ComponentFixture<ForceCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForceCoinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
