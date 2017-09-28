import config from '../config/campaign'
const campaignName = {
    title: 
        <p>Tell congress: Don't give Trump unconstitutional spying powers.</p>,
    emailHeading: 
        <div>
            <h3>Petition to members of the U.S. Senate:</h3>
            <p>Donald Trump’s first appointments to cabinet-level roles in his administration are horrifying. Trump’s nominees and rumored picks have promoted white nationalism, attacked climate science, and used their power as Wall Street insiders and corporate lobbyists to fleece working families.<div className="spacer" />As representatives of all Americans, you must stand up against hatred and greed. Fight to block and resist every Trump nominee who embraces racism, xenophobia, misogyny, homophobia, climate denial, and Wall Street greed.</p>
        </div>,    
    emailParagraph1: 
        <p>Congress is debating , a bill to give Trump, the NSA, and FBI the permanent power to spy on Americans - without a warrant. It must be defeated.</p>,
    phoneParagraph1:
        <div>
            {/* It’s the single most effective thing you can do. */}
            <h2>Thanks for signing. <br/> Now, could you call your member of Congress?</h2>
            <p>It’s the single most effective thing you can do.</p>
        </div>,
    phoneParagraph2:
        <div>
            <h2>Call your member of Congress <br/> Tell them to stop unconstitutional spying on Americans</h2>
            {/*
                <p>Just enter your number and click “call”</p>
                <br/>
                <p>We’ll connect you with your senators and key party leaders, and give you a script of what you can say. 
            */}
        </div>,
    phonelink: "tel:+18889999999", // telephone hyperlink
    phone: "(888) 999-9999", // telephone text
    phoneScript1: <em>We’re connecting you to your members of Congress now. Just tell them that we need the strongest possible reforms to Section 702 of the FISA Amendments Act, and that without them Section 702 should expire altogether. </em>,
    phoneScript2: 
        {/*
            <p>Please publicly <strong>OPPOSE Jeff Sessions for Attorney General.</strong> His history is far too racist, sexist, and pro-corporate to trust him in charge of the Justice Department.</p>
            <div className="spacer" />
            <p>Additionally, please demand that Sessions answers <strong>tough questions</strong> during his hearing & insist on the <strong>full 30 hours of debate</strong> for his nomination.</p> 
        */},
    callScript: 
        <div>
            <p><strong>Here’s what you can say:</strong></p>
            <p>“Hi, my name is [NAME] and I live in [TOWN]. I want my members of Congress to know that we need to rein in out-of-control surveillance by the NSA. </p>
            <p>“Specifically, we need the strongest possible reforms to Section 702 of the FISA Amendments Act, to ensure that spy agencies can no longer search American's communications without a warrant. Without these reforms, you should let Section 702 expire altogether.”</p>
        </div>,
    url: "`https://dp-call-congress.herokuapp.com/create?db=cwd&campaignId=${config.callCampaign}&userPhone=${number}&source_id=${getSource()}`",
    petitionBody: <h3>petition body/ direct link</h3>,
    optOut: <div className="suggestion">
                <p>“With his cabinet nominations, Donald Trump is breaking his promises to be a president for all Americans and to make the economy work for ordinary people, not just wealthy elites.</p>
                <div className="spacer" />
                <p>Please fight to block and resist every Trump nominee who embraces hatred and Wall Street greed.</p>
                <div className="spacer" />
                <p>In particular, please vote AGAINST enemy of civil rights <strong>Jeff Sessions</strong> for Attorney General, foreclosure king <strong>Steve Mnuchin</strong> (mi-NOO-chin) for Treasury Secretary, and Wall Street billionaire <strong>Wilbur Ross</strong> for Commerce Secretary. Thank you."</p>
            </div>
}

export default campaignName