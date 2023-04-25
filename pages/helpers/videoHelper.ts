import type { google } from '@alugha/ima';
import { VideoAdUnits } from '../constants/AdUnits';
import type { AdNames } from '../constants/AdNames';
import type { QAdManager } from '../constants/QAdManager';
import { buildVASTURL } from './buildVASTURL';

const sizeRatios = {
  m: 5 / 4,
  remaining: 9 / 16,
};

export const renderBid = ({
  adContainer,
  adManager,
  adName,
  soundControl,
  ima,
  onVideoCompletion,
  updateVideoAdCountdownSeconds,
  verticalPlayer = false,
}: {
  adContainer: HTMLDivElement | null;
  adManager: QAdManager;
  adName: AdNames;
  soundControl?: {
    muteButton: HTMLButtonElement;
    muted: boolean;
    setMuted: (muted: boolean) => void;
  };
  ima: typeof google.ima;
  onVideoCompletion: () => void;
  updateVideoAdCountdownSeconds?: (number: number) => void;
  verticalPlayer?: boolean;
}) => {

  if (!adContainer) {
    onVideoCompletion();
    return;
  }

  const keyValues = adManager.keyValues;

  const adUnit = VideoAdUnits[adName];

  let videoContent;
  const adDisplayContainer = new ima.AdDisplayContainer(
    adContainer,
    videoContent
  );
  const adsLoader = new ima.AdsLoader(adDisplayContainer);
  const adsRequest = new ima.AdsRequest();

  adsLoader.addEventListener(
    ima.AdErrorEvent.Type.AD_ERROR,
    adRenderingErr => {
      console.log(adRenderingErr);
      onVideoCompletion();
    },
    false
  );

  const width = verticalPlayer
    ? adContainer.parentElement?.offsetWidth || 854
    : 854;

  const height = verticalPlayer
    ? sizeRatios.m * width
    : sizeRatios.remaining * width;
  if (soundControl) {
    const mb = soundControl.muteButton;
    mb.style.position = 'absolute';
    mb.style.top = (height + 19).toString().concat('px');
    mb.style.marginLeft = (width - 38).toString().concat('px');
  }

  adsRequest.adTagUrl = buildVASTURL(adUnit, keyValues, verticalPlayer);

  adsRequest.linearAdSlotWidth = width;
  adsRequest.linearAdSlotHeight = height;

  adsLoader.addEventListener(
    ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
    adsManagerLoadedEvent => {
      const adsManager = adsManagerLoadedEvent.getAdsManager(videoContent);

      adsManager.addEventListener(
        ima.AdErrorEvent.Type.AD_ERROR,
        adRenderingErr => {
          console.log(adRenderingErr);
          onVideoCompletion();
        }
      );
      adsManager.setVolume(0);

      let clickthroughURL;
      adsManager.addEventListener(ima.AdEvent.Type.LOADED, e => {
        clickthroughURL = e.getAdData().clickThroughUrl;
      });

      if (soundControl) {
        soundControl.muteButton.onclick = () => {
          if (adsManager.getVolume() === 1) {
            soundControl.setMuted(true);
            adsManager.setVolume(0);
          } else {
            soundControl.setMuted(false);
            adsManager.setVolume(1);
          }
        };

        adsManager.setVolume(soundControl.muted ? 0 : 1);
      }

      adsManager.init(width, height, ima.ViewMode.NORMAL);
      adsManager.start();

      adsManager.addEventListener(ima.AdEvent.Type.COMPLETE, () => {
        onVideoCompletion();
      });

      if (updateVideoAdCountdownSeconds) {
        // Add an event listener here to enable a countdown timer
      }
    },
    false
  );

  adsLoader.requestAds(adsRequest);
  adDisplayContainer.initialize();
};
