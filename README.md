## Your challenge

Here you're presented a page primed to load a video ad from our ad manager using a VAST tag url. Your challenge has two parts:

- Incorporate the key-value array from our `adManager` into the VAST tag request. [For more on how to do this, see here.](https://support.google.com/admanager/answer/1080597?sjid=16700415470357656413-NA) Build your function in the `buildVASTURL.ts` file. You should see your ad display once your key-values, in particular `campaign`, are correctly added to the url. In this case all of the key-values are hardcoded, but you should assume that the `keyValues` object can have both arbitrary keys and values (see the `QAdManager` type to infer what's allowed.)

- If you successfully implement that, try adding a countdown timer. Start in the commented section of `videoHelper.ts`. Assuming you can get an integer value for the number of seconds left, you can use the `formatCountdown` function to format to seconds properly. If you have time to clean up visually, you can center the video horizontally and vertically, then try to put your timer in the lower-left corner of the video.

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you haven't already, you'll need to install node.js to run this repo. This shouldn't take too long.

You can google or use AI for any portion of this challenge.
