import React, { Component } from 'react'

class PhoneForm extends Component {

    render() {
        return (
            <div className="phone-form-wrapper">
                <h2>Thanks for signing. <br/> Now, could you make a call?</h2>
                <div className="paragraph">
                    It’s the single most effective thing you can do.
                </div>

                <div className="phone-form">
                    <form onSubmit={ this.onSubmit.bind(this) }>
                        <input placeholder="Your Phone Number" id="fieldPhone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
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
    }

    onSubmit(e) {
        e.preventDefault();

        const phoneField = e.target.fieldPhone;
       
        const number = phoneField.value.replace(/[^\d]/g, '');

        if (number.length !== 10) {
            phoneField.focus();
            return alert('Please enter your 10 digit phone number.');
        }

        const request = new XMLHttpRequest();
        let url = `https://demandprogress.callpower.org/call/create?campaignId=5&userPhone=${number}`;

        try {
            if ('zip' in sessionStorage) {
                url += `&userLocation=${sessionStorage.zip}`;
            }
        } catch (err) {
            // Oh well
        }

        request.open('POST', url, true);
        request.send();

        this.props.changeForm('script');
    }

    onClickOptOut(e) {
        e.preventDefault();

        this.props.changeForm('opt-out');
    }
}

export default PhoneForm