import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface contentHeaderI {
  actionButton: boolean;
  breadcrumb: {
    type: string;
    links: linkItemI[];
  };
}

interface linkItemI {
  name: string;
  isLink: boolean;
  link: string;
  isUrl: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ContentHeaderService {
  contentHeader: BehaviorSubject<contentHeaderI> = new BehaviorSubject(
    {} as contentHeaderI
  );
}
