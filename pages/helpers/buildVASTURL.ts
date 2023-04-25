
import type { VideoAdSize, VideoAdUnit } from '../constants/AdUnits';
import { KeyValues } from '../constants/QAdManager';

const formatKeyValues = (keyValues: KeyValues): string => {
    // Inject your function(s) here!
  return '';
};
  
const getCustomerParams = (keyValues: KeyValues) => {
    return `cust_params=`.concat(
      encodeURIComponent(
        formatKeyValues(keyValues)
      )
    );
  };

const getVASTSizes = (sizes: VideoAdSize, verticalPlayer: boolean) => {
  return `sz=`.concat(
    verticalPlayer && sizes.vertical ? sizes.vertical : sizes.remaining
  );
};

export const buildVASTURL = (
  adUnit: VideoAdUnit,
  keyValues: KeyValues,
  verticalPlayer: boolean
) => {
  return [
    adUnit.VastTagUrl,
    getCustomerParams(keyValues),
    getVASTSizes(adUnit.sizes, verticalPlayer),
  ].join('&');
};
