// prettier-ignore
export interface CoreMenuItem {
    id           : string;
    title        : string;
    url?         : string;
    type         : 'section' | 'collapsible' | 'item';
    role?        : Array<string>;
    translate?   : string;
    icon?        : string;
    disabled?    : boolean;
    hidden?      : boolean;
    classes?     : string;
    exactMatch?  : boolean;
    img?:string;
    externalUrl? : boolean;
    openInNewTab?: boolean;
    badge?       : {
        title?    : string;
        translate?: string;
        classes?    : string;
    };
    status?       : {
      title?    : string;
      translate?: string;
      classes?    : string;
  };
    children?: CoreMenuItem[];
    isCollapsibleSocial? :boolean;
}

export interface CoreMenu extends CoreMenuItem {
  children?: CoreMenuItem[];
}
