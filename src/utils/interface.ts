export interface ILink {
  path: string;
  text: string;
}

export interface IServiceContent {
  img: string;
  content?: string;
  clickPath?: string;
}

export interface IGeneralServicePackage {
  title: string;
  description?: string;
  featuresList: string[];
  deliverablesList?: string[];
  hasFeaturesTitle: boolean;
  hasFeaturesImg: boolean;
  hasDeliverableImg: boolean;
  hasDeliverableTitle: boolean;
  deliverablesImgPath: string;
}
