import React, { Component } from 'react'
import { urls, config } from '../../config/'
import ajax from '../../utils/ajax'
import PhoneScriptCopy from '../../copy/PhoneScriptCopy.jsx' 

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
            <div className="phone-script">
                <PhoneScriptCopy />
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
        )
    }
}

export default PhoneScript