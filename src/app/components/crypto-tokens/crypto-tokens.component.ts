import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-tokens',
  templateUrl: './crypto-tokens.component.html',
  styleUrls: ['./crypto-tokens.component.scss'],
})
export class CryptoTokensComponent implements OnInit {
  @Input() imgName: string;
  @Input() width = 40;
  @Input() height = 40;
  constructor() {}

  ngOnInit(): void {}
}
