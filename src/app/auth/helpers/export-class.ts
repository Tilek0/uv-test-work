import { BehaviorSubject } from 'rxjs';

export class LoadmoreNode {
  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);

  get children(): LoadmoreNode[] {
    return this.childrenChange.value;
  }

  constructor(
    public item: any,
    public hasChildren = false,
    public loadMoreParentItem: any | null = null
  ) {}
}

/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
  constructor(
    public item: any,
    public level = 1,
    public levelArray = [],
    public expandable = false,
    public loadMoreParentItem: any | null = null
  ) {}
}
