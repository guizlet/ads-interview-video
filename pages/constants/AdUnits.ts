import { AdNames } from './AdNames';

export const VideoAdUnits = {
  [AdNames.TEST_VIDEO_AD]: {
    VastTagUrl:
      'https://pubads.g.doubleclick.net/gampad/ads?iu=/6396803/CaseStudyVideoTest&description_url=[placeholder]&tfcd=0&npa=0&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
    sizes: {
      remaining: '854x480',
    },
  },
};

export type VideoAdUnit = {
  VastTagUrl: string;
  sizes: VideoAdSize;
};

export type VideoAdSize = {
  vertical?: string;
  remaining: string;
};
