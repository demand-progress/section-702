import React, { Component } from 'react'
import config from '../config/campaign'
import { paragraph1, phonelink, phone, phoneFormButtonText, paragraph2, paragraph3 } from '../store/campaign'
import { getSource } from '../utils/'


// import { paragraph1, phonelink, phone, paragraph2, paragraph3 } from '../store/jeffSessions'

class PhoneForm extends Component {

    _onSubmit(e) {
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
    }

    _onClickOptOut(e) {
        e.preventDefault();

        this.props.changeForm('opt-out');
    }

    render() {
        return (
            <div className="phone-form-wrapper">
                
                {paragraph1}

                <div className="phone-form">
                    <form onSubmit={ this.onSubmit }>
                        <input placeholder="Your Phone Number" id="field-phone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
                        <button>
                            { phoneFormButtonText }
                            <img src="images/phone.svg" />
                        </button>
                    </form>

                    <div className="privacy">
                        This tool uses <a href="https://www.twilio.com/legal/privacy" target="_blank">Twilio</a>’s APIs.
                        <br />
                        Or dial <a href={phonelink}>{phone}</a> to connect.
                    </div>
                </div>

                <div className="paragraph">
                    {paragraph2}
                </div>
                { paragraph3 && <div className="paragraph" >{paragraph3}</div> }

            </div>
        )
    }
};