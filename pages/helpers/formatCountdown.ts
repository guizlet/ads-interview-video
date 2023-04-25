
export const getFormattedVideoAdCountdown = (videoAdCountdownSeconds: number) => {
      return videoAdCountdownSeconds
        ? [
            Math.floor(videoAdCountdownSeconds / 60),
            (videoAdCountdownSeconds % 60).toLocaleString('en-US', {
              minimumIntegerDigits: 2,
            }),
          ].join(':')
        : undefined;
    };