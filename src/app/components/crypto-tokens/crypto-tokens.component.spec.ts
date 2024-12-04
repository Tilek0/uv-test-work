import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTokensComponent } from './crypto-tokens.component';

describe('CryptoTokensComponent', () => {
  let component: CryptoTokensComponent;
  let fixture: ComponentFixture<CryptoTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoTokensComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
