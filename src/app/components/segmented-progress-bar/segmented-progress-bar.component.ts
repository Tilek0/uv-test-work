import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-segmented-progress-bar',
  templateUrl: './segmented-progress-bar.component.html',
  styleUrls: ['./segmented-progress-bar.component.scss']
})
export class SegmentedProgressBarComponent implements OnInit, OnChanges {
  @Input() segmentedIntervalSelect = 0
  @Input() countSegmented = 8
  arraySegment = []
  constructor() { }
 

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
 
    this.arraySegment =new Array(this.countSegmented);
  }

}
