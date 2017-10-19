import { fetchSignatureCounts, onFetchSignatureCounts, getQueryVariables } from '../utils/'

const state = {}
// state.count = 0
state.isMobile = /mobile/i.test(navigator.userAgent)
state.isIE = /trident/i.test(navigator.userAgent)
state.query = getQueryVariables()

export default state
