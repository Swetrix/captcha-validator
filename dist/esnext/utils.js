const findInSearch = (exp) => {
    const res = location.search.match(exp);
    return (res && res[2]) || undefined;
};
const utmSourceRegex = /[?&](ref|source|utm_source)=([^?&]+)/;
const utmCampaignRegex = /[?&](utm_campaign)=([^?&]+)/;
const utmMediumRegex = /[?&](utm_medium)=([^?&]+)/;
export const isInBrowser = () => {
    return typeof window !== 'undefined';
};
export const isLocalhost = () => {
    return location?.hostname === 'localhost' || location?.hostname === '127.0.0.1' || location?.hostname === '';
};
export const isAutomated = () => {
    return navigator?.webdriver;
};
export const getLocale = () => {
    return typeof navigator.languages !== 'undefined' ? navigator.languages[0] : navigator.language;
};
export const getTimezone = () => {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    catch (e) {
        return;
    }
};
export const getReferrer = () => {
    return document.referrer || undefined;
};
export const getUTMSource = () => findInSearch(utmSourceRegex);
export const getUTMMedium = () => findInSearch(utmMediumRegex);
export const getUTMCampaign = () => findInSearch(utmCampaignRegex);
export const getPath = () => {
    // TODO: Maybe we should also include such data as location.hash or location.search
    return location.pathname || '';
};
//# sourceMappingURL=utils.js.map