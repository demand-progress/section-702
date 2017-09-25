import { getQueryVariables } from '../utils/'

// State
const state = {};
state.count = 0;
state.isMobile = /mobile/i.test(navigator.userAgent);
state.isIE = /trident/i.test(navigator.userAgent);
state.query = getQueryVariables();