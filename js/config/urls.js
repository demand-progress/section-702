import config from './campaign';
// URLs
const urls = {}
urls.actionkit = 'https://act.demandprogress.org/act/'
urls.count = 'https://act.demandprogress.org/progress/' + config.akPage + '?callback=onFetchSignatureCounts'
urls.facebook = 'https://www.facebook.com/sharer.php?u='
urls.feedback = 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?'
urls.twitter = 'https://twitter.com/intent/tweet?text='

export default urls