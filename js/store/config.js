// Config
const config = {};
config.akPage = 'DontLetTrumpSpyOnUs-www';
config.callCampaign = 'block-trumps-cabinet';
config.callCampaignSessions = 'block-trumps-cabinet-stop-sessions';
config.callCampaignMnuchin = 'block-trumps-cabinet-block-mnuchin';
config.link = 'https://DontLetTrumpSpyOnUs.com/';
config.prettyCampaignName = 'Don\'t Let Trump Spy On Us';
config.prettyCampaignNameSessions = 'Block Trump\'s Cabinet - Stop Sessions';
config.prettyCampaignNameMnuchin = 'Block Trump\'s Cabinet - Stop Mnuchin';

const urls = {};
urls.actionkit = 'https://act.demandprogress.org/act/';
urls.count = 'https://act.demandprogress.org/progress/' + config.akPage + '?callback=onFetchSignatureCounts';
urls.facebook = 'https://www.facebook.com/sharer.php?u=';
urls.feedback = 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?';
urls.twitter = 'https://twitter.com/intent/tweet?text=';

export { config, urls }