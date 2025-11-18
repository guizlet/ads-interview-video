export const getFormattedVideoAdCountdown = (
  videoAdCountdownSeconds: number
) => {
  return [
    Math.floor(videoAdCountdownSeconds / 60),
    Math.floor(videoAdCountdownSeconds % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    }),
  ].join(":");
};
