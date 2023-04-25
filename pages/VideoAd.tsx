import { useEffect, useRef } from 'react'
import { renderBid } from './helpers/videoHelper'
import { adManager } from './constants/QAdManager'
import { AdNames } from './constants/AdNames'
import type { google } from '@alugha/ima'

type Props = {
  ima: typeof google.ima
}

export default function VideoAd({ima}: Props) {

  const adUnit = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const adContainer = adUnit.current;
    if (adUnit.current) {
      renderBid({
        adContainer,
        adManager,
        adName: AdNames.TEST_VIDEO_AD,
        ima,
        onVideoCompletion: () => {},
      });

    }
  }, [
    adUnit
  ]);

  return (
    <div ref={adUnit}/>
  )
}
