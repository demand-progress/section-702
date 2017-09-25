import React, { Component } from 'react'

export default React.createClass({
    render: function() {
        return (
            <div className="phone-form-wrapper">
                <h2>Thanks for signing. <br/> Now, could you make a call?</h2>
                <div className="paragraph">
                    It’s the single most effective thing you can do.
                </div>

                <div className="phone-form">
                    <form onSubmit={ this.onSubmit }>
                        <input placeholder="Your Phone Number" id="field-phone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
                        <button>
                            CALL THE SENATE
                            <img src="images/phone.svg" />
                        </button>
                    </form>

                    <div className="privacy">
                        This tool uses <a href="https://www.twilio.com/legal/privacy" target="_blank">Twilio</a>’s APIs.
                        <br />
                        Or dial <a href="tel:+12023350610">(202) 335-0610</a> to connect.
                    </div>
                </div>

                <div className="paragraph">
                    Just enter your number and click “call”
                    <br/>
                    <br/>
                    We’ll connect you with your senators and key party leaders, and give you a script of what you can say.
                </div>
            </div>
        );
    },

    onSubmit: function(e) {
        e.preventDefault();

        const phoneField = this.refs['field-phone'];
        const number = phoneField.value.replace(/[^\d]/g, '');

        if (number.length !== 10) {
            phoneField.focus();
            return alert('Please enter your 10 digit phone number.');
        }

        const request = new XMLHttpRequest();
        let url = `https://dp-call-congress.herokuapp.com/create?db=cwd&campaignId=${config.callCampaign}&userPhone=${number}&source_id=${getSource()}`;

        try {
            if ('zip' in sessionStorage) {
                url += `&zipcode=${sessionStorage.zip}`;
            }
        } catch (err) {
            // Oh well
        }

        request.open('GET', url, true);
        request.send();

        this.props.changeForm('script');
    },

    onClickOptOut: function(e) {
        e.preventDefault();

        this.props.changeForm('opt-out');
    },
});