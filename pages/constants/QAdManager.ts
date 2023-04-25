export const adManager: QAdManager = {
    keyValues: {
        campaign: 'CaseStudyVideo',
        age: '16',
        browser: 'Chrome',
        b: ['a', 'b', 'c'],
    },
    shouldShowAds: true,
}

export type QAdManager = {
    keyValues: KeyValues;
    shouldShowAds: boolean;
}

export type KeyValues = Record<string, string | string[]>;