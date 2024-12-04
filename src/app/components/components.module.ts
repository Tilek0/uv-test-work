import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { LevelItemComponent } from './level-item/level-item.component';
import { LevelItemComponentNEW } from './level-item-new/level-item.component';
import { LevelItemComponentChip } from './level-item-chip/level-item.component';
import { ChipsProgressComponent } from './chips-progress/chips-progress.component';
import { CountControllerComponent } from './count-controller/count-controller.component';
import { DashedProgressComponent } from './dashed-progress/dashed-progress.component';
import { DoubleProgressComponent } from './double-progress/double-progress.component';
import { LiquidProgressComponent } from './liquid-progress/liquid-progress.component';
import { BatteryProgressComponent } from './battery-progress/battery-progress.component';
import { MachinesProgressComponent } from './machines-progress/machines-progress.component';
import { ExpandableChip } from './expandable-chip/expandable-chip.component';
import { ResentActivityItemComponent } from './resent-activity-item/resent-activity-item.component';
import { TotalChartComponent } from './total-chart/total-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TimeOverLevelComponent } from './time-over-level/time-over-level.component';
import { NotActivatedLevelComponent } from './not-activated-level/not-activated-level.component';
import { TreeVerticalComponent } from './tree-vertical/tree-vertical.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { PurchaseLevelComponent } from './purchase-level/purchase-level.component';
import { MarketingComponent } from './marketing/marketing.component';

import { PackModalComponent } from './pack-modal/pack-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { SteperInputComponent } from './steper-input/steper-input.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { RouterModule } from '@angular/router';
import { FilterOrbitComponent } from './filter-orbit/filter-orbit.component';
import { MarketingTabelComponent } from './marketing-tabel/marketing-tabel.component';
import { CryptoTokensComponent } from './crypto-tokens/crypto-tokens.component';
import { SupplyProgressBarComponent } from './supply-progress-bar/supply-progress-bar.component';
import { ExpectationModalComponent } from './expectation-modal/expectation-modal.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExtendChooseTypeModalComponent } from './extend-choose-type-modal/extend-choose-type-modal.component';
import { ExtendChooseTypeModalComponentNEW } from './extend-choose-type-modal-new/extend-choose-type-modal.component';
import { ExpandChipModal } from './expand-chip-modal/expand-chip-modal.component';
import { GameHelpModal } from './game-help-modal/game-help-modal.component';
import { ConfirmModal } from './confirm-modal/confirm-modal.component';
import { SelectChipModal } from './select-chip-modal/select-chip-modal.component';
import { MiniGameModalComponent } from './mini-game-modal/mini-game-modal.component';
import { UpgradeChipModal } from './upgrade-chip-modal/upgrade-chip-modal.component';
import { UpgradeWaveModal } from './upgrade-wave-modal/upgrade-wave-modal.component';
import { ClaimModalComponent } from './claim-modal/claim-modal.component';
import { ConfirmBuybackModal } from './confirm-buyback-modal/confirm-buyback-modal.component';
import { ConfirmBuybackOfferPriceModal } from './confirm-buyback-offer-price-modal/confirm-buyback-offer-price-modal.component';
import { MatSliderModule } from '@angular/material/slider';
import { DeltaShortInfoComponent } from './delta-short-info/delta-short-info.component';
import { LinksPanelComponent } from './links-panel/links-panel.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { RecentOperationsComponent } from './recent-operations/recent-operations.component';
import { VestingTariffsComponent } from './vesting-tariffs/vesting-tariffs.component';
import { TabsComponent } from './tabs/tabs.component';
import { DraggableCountControllerComponent } from './draggable-count-controller/draggable-count-controller.component';
import { SegmentedProgressBarComponent } from './segmented-progress-bar/segmented-progress-bar.component';
import { GetHmfsConfimModalComponent } from './get-hmfs-confim-modal/get-hmfs-confim-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LevelItemComponent,
    LevelItemComponentNEW,
    LevelItemComponentChip,
    ChipsProgressComponent,
    CountControllerComponent,
    DashedProgressComponent,
    DoubleProgressComponent,
    LiquidProgressComponent,
    BatteryProgressComponent,
    MachinesProgressComponent,
    ExpandableChip,
    DeltaShortInfoComponent,
    LinksPanelComponent,
    FilterPanelComponent,
    RecentOperationsComponent,
    VestingTariffsComponent,
    ResentActivityItemComponent,
    TotalChartComponent,
    TimeOverLevelComponent,
    NotActivatedLevelComponent,
    TreeVerticalComponent,
    PurchaseLevelComponent,
    MarketingComponent,
    PackModalComponent,
    TableComponent,
    SteperInputComponent,
    SwitchButtonComponent,
    FilterOrbitComponent,
    MarketingTabelComponent,
    CryptoTokensComponent,
    SupplyProgressBarComponent,
    ExpectationModalComponent,
    ExtendChooseTypeModalComponent,
    ExtendChooseTypeModalComponentNEW,
    ExpandChipModal,
    ConfirmModal,
    SelectChipModal,
    GameHelpModal,
    MiniGameModalComponent,
    UpgradeChipModal,
    UpgradeWaveModal,
    ClaimModalComponent,
    ConfirmBuybackModal,
    ConfirmBuybackOfferPriceModal,
    TabsComponent,
    DraggableCountControllerComponent,
    SegmentedProgressBarComponent,
    GetHmfsConfimModalComponent,
  ],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    MatTreeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    NgApexchartsModule,
    MatIconModule,
    MatProgressBarModule,
    TranslateModule,
    MatTableModule,
    RouterModule,
    FontAwesomeModule,
    MatSliderModule,
    NgbPopoverModule,
    MatTooltipModule,
  ],
  exports: [
    LevelItemComponent,
    LevelItemComponentNEW,
    LevelItemComponentChip,
    ChipsProgressComponent,
    CountControllerComponent,
    DashedProgressComponent,
    DoubleProgressComponent,
    LiquidProgressComponent,
    BatteryProgressComponent,
    MachinesProgressComponent,
    ExpandableChip,
    DeltaShortInfoComponent,
    LinksPanelComponent,
    FilterPanelComponent,
    RecentOperationsComponent,
    VestingTariffsComponent,
    ResentActivityItemComponent,
    TotalChartComponent,
    TimeOverLevelComponent,
    NotActivatedLevelComponent,
    TreeVerticalComponent,
    PurchaseLevelComponent,
    MarketingComponent,
    PackModalComponent,
    TranslateModule,
    TableComponent,
    SteperInputComponent,
    FilterOrbitComponent,
    MarketingTabelComponent,
    CryptoTokensComponent,
    SupplyProgressBarComponent,
    ExpectationModalComponent,
    ExtendChooseTypeModalComponent,
    ExtendChooseTypeModalComponentNEW,
    ExpandChipModal,
    GameHelpModal,
    ConfirmModal,
    SelectChipModal,
    MiniGameModalComponent,
    UpgradeChipModal,
    UpgradeWaveModal,
    ClaimModalComponent,
    ConfirmBuybackModal,
    ConfirmBuybackOfferPriceModal,
    TabsComponent,
    DraggableCountControllerComponent,
    SegmentedProgressBarComponent,
    GetHmfsConfimModalComponent,
    MatTooltipModule,
  ],
  providers: [],
})
export class ComponentsModule {}
