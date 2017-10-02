import { fetchSignatureCounts, onFetchSignatureCounts, getQueryVariables } from '../utils/'

const state = {};
state.count = 5000;
state.isMobile = /mobile/i.test(navigator.userAgent);
state.isIE = /trident/i.test(navigator.userAgent);
state.query = getQueryVariables();

// fetchSignatureCounts()
// window.onFetchSignatureCounts = onFetchSignatureCounts;

export default state
