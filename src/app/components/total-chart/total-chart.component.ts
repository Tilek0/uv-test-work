import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CoreConfigService } from '@core/services/config.service';

@Component({
  selector: 'app-total-chart',
  templateUrl: './total-chart.component.html',
  styleUrls: ['./total-chart.component.scss'],
})
export class TotalChartComponent implements OnInit, OnChanges {
  @Input() daiArray: string[] = [];
  @Input() mfsArray: string[] = [];
  @Input() changeChart = false;
  @Input() balancesOnPayment = { mfs: '0', stablecoin: '0' };
  @Output() changeChartEvent: EventEmitter<boolean> = new EventEmitter();
  math = Math;
  public gainedChartoptions;
  private $DailColor = '#FF9501';
  private $MfcColor = '#C68DFF';
  public isMenuToggled = true;

  @ViewChild('gainedChartRef') gainedChartRef: any;

  data = {
    subscribers_gained: {
      series: [
        {
          // name: 'Subscribers',
          data: this.daiArray,
        },
        {
          // name: 'Subscribers',
          data: this.mfsArray,
        },
      ],
      analyticsData: {
        subscribers: '92.6k',
      },
    },
  };
  constructor(private _coreConfigService: CoreConfigService) {}

  ngOnInit(): void {
    this.gainedChartoptions = {
      chart: {
        height: 200,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: [this.$DailColor, this.$MfcColor],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2.5,
      },
      fill: {
        colors: ['#FF950100', '#C68DFF00'],
        opacity: 0.9,
        type: 'gradient',
        gradient: {
          // shade: 'dark',
          type: 'horizontal',
          // shadeIntensity: 0.5,
          gradientToColors: ['#FF950133', '#C68DFF33'],
          //  inverseColors: true,
          opacityFrom: [0.9, 0.9],
          opacityTo: 1,
          stops: [],
          colorStops: [],
        },
      },
      xaxis: {
        floating: true,
        labels: {
          minWidth: 0,
          maxWidth: 0,
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 3,
        floating: true,
        labels: {
          align: 'left',
          minWidth: 0,
          maxWidth: 0,
          style: {
            cssClass: 'spark-line-custome',
          },
          offsetX: 24,
          formatter: value => {
            return value;
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        borderColor: '#FFFFFF1A',
        strokeDashArray: 0,
        // position: 'back',

        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.changeChart) {
      this.data.subscribers_gained.series = [
        { data: this.daiArray },
        { data: this.mfsArray },
      ];
      setTimeout(() => {
        this.changeChartEvent.emit(false);
      }, 1000);
    }
  }
  ngAfterViewInit() {
    // Subscribe to core config changes
  }
}
