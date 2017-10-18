// config
const config = {}
config.akPage = 'DontLetTrumpSpyOnUs-www-simple'
config.link = 'https://DontLetTrumpSpyonUs.com/'
config.prettyCampaignName = 'Don\'t Let Trump Spy on Us'
config.callCampaign = 'dont-let-trump-spy-on-us'

// URLs
const urls = {}
urls.actionkit = 'https://act.demandprogress.org/act/'
urls.count = 'https://act.demandprogress.org/progress/' + config.akPage + '?callback=onFetchSignatureCounts'
urls.facebook = 'https://www.facebook.com/sharer.php?u='
urls.feedback = 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?'
urls.twitter = 'https://twitter.com/intent/tweet?text='

// phone numbers
let numbers = {
    // 'The Office of the Treasury Secretary': '202-622-1100',
    // 'The Office of the White House Chief of Staff': '202-456-3737',
    // 'SEC Chair Mary Jo White': '202-551-2100',
    // 'SEC Commissioner Luis Aguilar': '202-551-2500',
    // 'SEC Commissioner Daniel Gallagher': '202-551-2600',
    // 'SEC Commissioner Kara Stein': '202-551-2800',
    // 'SEC Commissioner Michael Piwowar': '202-551-2700',
    // 'The Office of the SEC General Counsel': '202-551-5100',
    // 'The Domestic Policy Council': '202-456-5594',
    // 'The Office of Public Engagement': '202-456-1097',
    // 'The Office of the Press Secretary': '202-456-3282',
    // 'The White House General Counsel': '202-456-2632',
    // 'The Office of Management and Budget': '202-395-4840',
    // 'White House Operations': '202-456-2500',
    // 'The Domestic Policy Council': '202-456-6515',
    // 'The Office of Administration': '202-456-2861',
    // 'The Council of Economic Advisers': '202-395-5084',
    // 'Hillary Clinton\'s Campaign': '646-854-1432',
    'Call the Senate:': '202-335-0610',
}

// default email message
let subjectText = "I just signed this:"
let bodyText = "Hi - I just took action against Donald Trump’s horrifying picks for cabinet-level roles in his administration.\n\nTrump’s nominees have promoted white nationalism, attacked climate science and used their power as Wall Street insiders to fleece working families.\n\nI just signed a petition urging the Senate to block and resist any Trump nominee embracing hatred and greed. Could you sign too?\n\nhttps://www.BlockTrumpsCabinet.com/?source=email-share"
const emailSubject = encodeURIComponent(subjectText.trim())
const emailBody = encodeURIComponent(bodyText.trim())
let hrefEmail = `mailto:?subject=${emailSubject}&body=${emailBody}`

export { urls, config, numbers, hrefEmail }