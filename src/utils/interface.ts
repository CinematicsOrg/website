export interface ILink {
  path: string;
  text: string;
}

export interface IServiceContent {
  text?: string;
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

export interface IYoutubeLinks {
  src: string;
  title: string;
}
