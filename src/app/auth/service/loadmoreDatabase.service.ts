import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadmoreNode } from '../helpers/export-class';
const LOAD_MORE = 'LOAD_MORE';

@Injectable({ providedIn: 'root' })
export class LoadmoreDatabase {
  batchNumber = 5;
  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
  nodeMap = new Map<any, LoadmoreNode>();

  /** The data */
  rootLevelNodes: any[] = [];
  dataMap = new Map<any, any[]>([]);

  initialize() {
    const data = this.rootLevelNodes.map(item => this._generateNode(item));
    this.dataChange.next(data);
  }

  /** Expand a node whose children are not loaded */
  loadMore(item: any, onlyFirstTime = false) {
    if (!this.nodeMap.has(item.userId) || !this.dataMap.has(item.userId)) {
      return;
    }
    const parent = this.nodeMap.get(item.userId)!;
    const children = this.dataMap.get(item.userId)!;
    if (onlyFirstTime && parent.children!.length > 0) {
      return;
    }

    const newChildrenNumber = parent.children!.length + this.batchNumber;
    const nodes = children
      .slice(0, newChildrenNumber)
      .map(item => this._generateNode(item));
    if (newChildrenNumber < item.referralsAmount) {
      // Need a new load more node
      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
    }

    parent.childrenChange.next(nodes);
    this.dataChange.next(this.dataChange.value);
  }

  private _generateNode(item: any): LoadmoreNode {
    if (this.nodeMap.has(item.userId)) {
      return this.nodeMap.get(item.userId)!;
    }
    let result: LoadmoreNode;

    result = new LoadmoreNode(item, item.referralsAmount > 0);

    this.nodeMap.set(item.userId, result);
    return result;
  }
}
