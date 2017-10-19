import React, { Component } from 'react'
import { urls, config } from '../config/'
import ajax from '../utils/ajax'
// import PhoneScriptCopy from '../../copy/PhoneScriptCopy.jsx' 

class PhoneScript extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            sent: false,
         }
    }
    onClickSendFeedback(e) {
        e.preventDefault();

        const data = {
            campaign: config.callCampaign,
            subject: 'Feedback from ' + (config.prettyCampaignName || config.callCampaign),
            text: '',
        };

        const fields = [
            document.querySelector('#who'),
            document.querySelector('#how'),
        ]

        fields.forEach(field => {
            data.text += `${field.name}:\n${field.value}\n\n`;
        })

        let url = urls.feedback;

        for (let key in data) {
            url += key;
            url += '=';
            url += encodeURIComponent(data[key]);
            url += '&';
        }

        ajax.get(url);

        this.setState({
            sent: true,
        })
    }
    render() {
        return (
            // <PhoneScriptCopy onSubmit={this.onClickSendFeedback.bind(this)}/>
            <div className="phone-script">
                <h2>We’re calling you now.</h2>
                <h3>After the conversation, you can <strong>press *</strong> and we’ll connect you to the next office.</h3>
                <div className="spacer" />

                <em>Here’s what you can say:</em>
                <div className="spacer" />

                <div className="suggestion">
                    <p>“Hi, my name is [NAME] and I live in [TOWN]. I’m calling to urge my members of Congress to support strong surveillance reform legislation that stops spying on
                        Americans without a warrant. The proposed “USA Liberty Act,” H.R. 3989, needs wholesale improvements before you should consider supporting it.</p>
                    <p>Any reauthorization of Section 702 of the FISA Amendments Act must include:</p>
                    <ul>
                    <li>- an end to backdoor searches,</li>
                    <li>- a permanent ban on “about” collection, and</li>
                    <li>- a guarantee that the government cannot secretly use surveillance information in court against defendants. </li>
                        </ul>
                    <p>Without these reforms, Section 702 should be allowed to expire in December."</p>
                </div>
                <div className="spacer" />

                <div className="calling-wrapper">
                    <h3>After your call(s), use the form to let us know how it went!</h3>
                    <form action="#" method="get" className={this.state.sent ? 'sent' : false}>
                        <div className="wrapper">
                            <h4>Who did you speak with?</h4>
                            <input required="required" type="text" name="Who did you speak with?" id="who" style={{'font-size': '24px', 'height': '50px'}} />
                            <h4>How did it go?</h4>
                            <textarea required="required" type="text" name="How did it go?" id="how" style={{'width': '100%'}} rows="4"></textarea>
                            <br />
                            <div id="thanks">Thank you!</div>
                            <button onClick={this.onClickSendFeedback.bind(this)} type="submit" name="submit">Send Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
            // end PhoneScriptCopy
        )
    }
}

export default PhoneScript