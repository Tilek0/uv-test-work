import { Injectable } from '@angular/core';
import { HelpInfo, sideNavType } from '../helpers';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideNavService {
  itemCoin: BehaviorSubject<any> = new BehaviorSubject({});
  isCoinChange: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private helpInfo: HelpInfo) {}

  closeSlideNavAction(isOpen) {
    if (!isOpen) {
      if (this.helpInfo.isOpenSlideNavSecondary.value.isOpen) {
        this.helpInfo.isOpenSlideNavSecondary.next({
          isOpen: true,
          type: sideNavType.walletHistory,
          item: this.itemCoin.value,
        });
      }
      this.helpInfo.isOpenSlideNavMain.next({
        isOpen: true,
        type: sideNavType.wallet,
        item: this.itemCoin.value,
      });

      this.helpInfo.isOpenSlideNavThird.next({
        isOpen: false,
        type: sideNavType.inner,
      });
    }
  }
}
