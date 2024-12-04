import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-steper-input',
  templateUrl: './steper-input.component.html',
  styleUrls: ['./steper-input.component.scss'],
})
export class SteperInputComponent implements OnInit {
  @Input() typeValue: number;
  @Output() changeTypeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeType(value: number) {
    this.changeTypeEvent.emit(value);
  }
}
