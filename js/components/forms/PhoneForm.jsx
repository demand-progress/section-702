import React, { Component } from 'react'

import { config } from '../../config/'
import { getSource } from '../../utils/index'

class PhoneForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source: getSource()
        }
    }

    componentDidMount() {
        console.log("WTF?");
        if (this.state.source == "directcall") {
            let petition = document.getElementById("petition");
            console.log(petition);
            petition.scrollIntoView();
        }
    }

    render() {
        return (
            <div id="petition" className="phone-form-wrapper">
                <div style={(getSource() == "directcall") ? { display: 'none' } : {} }>
                <h2>Thanks for signing. <br/> Now, could you make a call?</h2>
                
                <div className="paragraph">
                    It’s the single most effective thing you can do.
                </div>
                </div>
                <div style={(getSource() == "directcall") ? { } : { display: 'none' } }>
                    <h2>Make a call to stop warrantless spying on Americans:</h2>
                </div>

                <div className="phone-form">
                    <form onSubmit={ this.onSubmit.bind(this) }>
                        <input placeholder="Your Phone Number" id="fieldPhone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
                        <button>CALL CONGRESS
                            <img src="images/phone.svg" />
                        </button>
                    </form>
                    <div className="privacy">
                        <p>This tool uses <a href="http://callpower.org/" target="_blank">Call Power</a></p>
                        {/* <p>Or dial <a href="tel:+12023350610">(202) 335-0610</a> to connect.</p> */}
                    </div>
                </div>
                <div className="paragraph">
                    Just enter your number and click “call”
                    <br/>
                    <br/>
                    We’ll connect you with members of Congress and key party leaders, and give you a script of what you can say.
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
        let url = `https://demandprogress.callpower.org/call/create?campaignId=6&userPhone=${number}`;

        let zip
        try {
            if ('zip' in sessionStorage) {
                zip = `${sessionStorage.zip}`;
            }
        } catch (err) {
            // Oh well
        }

        this.props.changeForm('script');

        request.open('POST', url, true);
        request.send();
        
    }

    onClickOptOut(e) {
        e.preventDefault();
        this.props.changeForm('opt-out');
    }
}

export default PhoneForm