import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'supply-progress-bar',
  templateUrl: './supply-progress-bar.html',
  styleUrls: ['./supply-progress-bar.scss'],
})
export class SupplyProgressBarComponent implements OnInit, OnChanges {
  @Input() current: number = 0;
  @Input() total: number = 0;
  @Input() price: number = 0;
  @ViewChild('customePopover') customePopover;
  @ViewChild('customeArrow') customeArrow;
  @ViewChild('customeProgressBar') customeProgressBar;

  // public progress = this.current / this.total;

  // @HostListener('mousemove', ['$event']) onMouseMove(event) {

  // }
  clientX = 1;
  openPopover = false;
  isCollapsed;

  public progress1 = 0;
  public progress2 = 0;
  public progress3 = 0;
  public progress4 = 0;
  public progress5 = 0;

  constructor(
    private config: NgbPopoverConfig,
    private _coreConfigService: CoreConfigService
  ) {
    this._coreConfigService.config.subscribe(config => {
      this.isCollapsed = config.layout.menu.collapsed;
    });
  }

  ngOnInit(): void {
    //setInterval(() => this.manageProgress(), 500);
    this.calculateBars();
  }

  mouseMoved(event) {
    let correctValue = 380;
    if (this.isCollapsed) {
      correctValue = 220;
    }
    let value = event.clientX - correctValue;

    if (
      this.openPopover &&
      value > -80 &&
      this.customeProgressBar.nativeElement.offsetWidth - 120 > value
    ) {
      this.customePopover.nativeElement.style.left = value + 'px';
    }
  }

  open(event) {
    this.openPopover = !this.openPopover;
  }

  mouseOpen(value) {
    this.openPopover = value;
  }

  calculateBars() {
    // bar 1 (0 - 0.5)
    if (this.current < this.total / 2) {
      this.progress1 = this.current / (this.total / 2);
      if (this.progress1 < 0.002) this.progress1 = 0.002;
      this.progress2 = 0;
      this.progress3 = 0;
      this.progress4 = 0;
      this.progress5 = 0;
      return;
    } else this.progress1 = 1;

    // bar 2 (0.5 - 0.75)
    if (this.current < this.total * 0.75 && this.current > this.total * 0.5) {
      this.progress2 =
        (this.current - this.total / 2) /
        (this.total * 0.75 - this.total * 0.5);
      if (this.progress2 < 0.004) this.progress2 = 0.004;
      this.progress3 = 0;
      this.progress4 = 0;
      this.progress5 = 0;
      return;
    } else this.progress2 = 1;

    // bar 3 (0.75 - 0.875)
    if (this.current < this.total * 0.875 && this.current > this.total * 0.75) {
      // var low = (this.total * 0.875 - this.total * 0.75)
      // var high = this.total / 0.75
      // debugger
      this.progress3 =
        (this.current - this.total * 0.75) /
        (this.total * 0.875 - this.total * 0.75);
      this.progress4 = 0;
      this.progress5 = 0;
      return;
    } else this.progress3 = 1;

    // bar 4 (0.875 - 0.9375)
    if (
      this.current < this.total * 0.9375 &&
      this.current > this.total * 0.875
    ) {
      this.progress4 =
        (this.current - this.total * 0.875) /
        (this.total * 0.9375 - this.total * 0.875);
      this.progress5 = 0;
      return;
    } else this.progress4 = 1;

    // bar 5 (0.9375 - 1)
    if (this.current < this.total && this.current > this.total * 0.9375) {
      this.progress5 =
        (this.current - this.total * 0.9375) /
        (this.total - this.total * 0.9375);
      return;
    } else this.progress5 = 1;
  }

  manageProgress() {
    if (this.current >= this.total) {
      this.current = 0;
    } else {
      this.current = this.current + this.total / 150;
    }
    this.calculateBars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateBars();
  }
  ngAfterViewInit() {}
}
