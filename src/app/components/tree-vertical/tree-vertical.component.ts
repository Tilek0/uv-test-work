import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { LoadmoreFlatNode, LoadmoreNode } from 'app/auth/helpers/export-class';
import { LoadmoreDatabase } from 'app/auth/service/loadmoreDatabase.service';

import { locale as english } from './i18n/en';
import { locale as russian } from './i18n/ru';
import { locale as chine } from './i18n/zh';
import { locale as hindi } from './i18n/hi';
import { locale as vietnam } from './i18n/vi';
import { locale as arab } from './i18n/id';
import { locale as indonesia } from './i18n/ar';
import { locale as urdu } from './i18n/ur';
import { locale as french } from './i18n/fr';
import { CoreTranslationService } from '@core/services/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { CoreConfigService } from '@core/services/config.service';

const LOAD_MORE = 'LOAD_MORE';

const TREE_DATA = [];

@Component({
  selector: 'app-tree-vertical',
  templateUrl: './tree-vertical.component.html',
  styleUrls: ['./tree-vertical.component.scss'],
})
export class TreeVerticalComponent implements OnInit, AfterContentInit {
  @Input() getMoreDate: any;
  @Input() isLoader = false;
  isCollapsed: boolean;
  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  // Flat tree data source
  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;

  constructor(
    private _database: LoadmoreDatabase,
    private cdr: ChangeDetectorRef,
    public translate: TranslateService,
    private coreTranslationService: CoreTranslationService,
    private _coreConfigService: CoreConfigService
  ) {
    this.coreTranslationService.translate(
      russian,
      english,
      chine,
      hindi,
      vietnam,
      arab,
      indonesia,
      urdu,
      french
    );
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(
      this.getLevel,
      this.isExpandable
    );

    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {}
  ngAfterContentInit() {
    this._coreConfigService.config.subscribe(config => {
      this.isCollapsed = config.layout.menu.collapsed;
    });
  }

  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> =>
    node.childrenChange;

  transformer = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap.get(node.item.userId);

    if (existingNode) {
      return existingNode;
    }

    let levelArray = [];
    for (let index = 0; index < level - 1; index++) {
      levelArray.push(index);
    }

    const newNode = new LoadmoreFlatNode(
      node.item,
      level,
      levelArray,
      node.hasChildren,
      node.loadMoreParentItem
    );
    if (node.item.userId) {
      this.nodeMap.set(node.item.userId, newNode);
    } else {
      this.nodeMap.set(node.item, newNode);
    }

    return newNode;
  };

  getLevel = (node: LoadmoreFlatNode) => node.level;

  isExpandable = (node: LoadmoreFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => {
    return _nodeData.expandable;
  };

  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => {
    return _nodeData.item === LOAD_MORE;
  };

  loadMore(item: any) {
    this.getMoreDate(item);
  }

  loadChildren(node: LoadmoreFlatNode) {
    this.getMoreDate(node.item, true);
  }
}
