import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTabelComponent } from './marketing-tabel.component';

describe('MarketingTabelComponent', () => {
  let component: MarketingTabelComponent;
  let fixture: ComponentFixture<MarketingTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketingTabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
