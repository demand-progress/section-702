import React, { Component } from 'react'
import { urls, config } from '../store/config' 

const PhoneScript = React.createClass({
    onClickSendFeedback: function(e) {
        e.preventDefault();

        const data = {
            campaign: config.callCampaign,
            subject: 'Feedback from ' + (config.prettyCampaignName || config.callCampaign),
            text: '',
        };

        const fields = [
            document.querySelector('#who'),
            document.querySelector('#how'),
        ];

        fields.forEach(field => {
            data.text += `${field.name}:\n${field.value}\n\n`;
        });

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
        });
    },

    getInitialState: function() {
        return {
            sent: false,
        };
    },

    render: function() {
        return (
            <div className="phone-script">
                <em>We’re calling you now. <br /> After the conversation, you can <strong>press *</strong> and we’ll connect you to the next office.</em>
                <div className="spacer" />

                <em>Here’s what you can say:</em>
                <div className="spacer" />

                <div className="suggestion">
                    “With his cabinet nominations, Donald Trump is breaking his promises to be a president for all Americans and to make the economy work for ordinary people, not just wealthy elites.
                    <div className="spacer" />
                    Please fight to block and resist every Trump nominee who embraces hatred and Wall Street greed.
                    <div className="spacer" />
                    In particular, please vote AGAINST enemy of civil rights <strong>Jeff Sessions</strong> for Attorney General, foreclosure king <strong>Steve Mnuchin</strong> (mi-NOO-chin) for Treasury Secretary, and Wall Street billionaire <strong>Wilbur Ross</strong> for Commerce Secretary. Thank you."
                </div>
                <div className="spacer" />

                <div className="calling-wrapper">
                    <h3>After your call(s), use the form to let us know how it went!</h3>
                    <form action="#" method="get" className={this.state.sent ? 'sent' : false}>
                        <div className="wrapper">
                            <h4>Who did you speak with?</h4>
                            <input required="required" type="text" name="Who did you speak with?" id="who" />
                            <h4>How did it go?</h4>
                            <input required="required" type="text" name="How did it go?" id="how" />
                            <br />
                            <div id="thanks">Thank you!</div>
                            <button onClick={this.onClickSendFeedback} type="submit" name="submit">Send Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    },
})

export default PhoneScript