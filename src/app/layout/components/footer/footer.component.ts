import { OnInit, OnDestroy, Component } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit, OnDestroy {
  public coreConfig: any;
  public year: number = new Date().getFullYear();

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    public _coreConfigService: CoreConfigService,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(config => {
        this.coreConfig = config;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
