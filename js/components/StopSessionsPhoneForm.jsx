import React, { Component } from 'react'

const StopSessionsPhoneForm = React.createClass({
    render: function() {
        return (
            <div className="stop-sessions-wrapper">
                <div className="phone-form-wrapper stop-sessions">
                    <div className="paragraph">
                        <strong>
                        Hearings on Trump's appointment of Jeff Sessions to be Attorney General have already begun.
                        <br />
                        <br />
                        Senate Democrats need to get their backbones and block the appointment of this authoritarian, corporatist, racist, and sexist to run our law enforcement apparatus.
                        </strong>
                    </div>

                    <div className="phone-form" id="phone-form">
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
                            Or dial <a href="tel:+16282227668">(628) 222-7668</a> to connect.
                        </div>
                    </div>

                    <div className="paragraph">
                        Enter your number above to call key senators to tell them to block Jeff Sessions for Attorney General.
                    </div>
                </div>

                <div className="paragraph" >
                    <hr />
                    <h3>Why do we need to block Sessions?</h3>
                    He has a longstanding voting record in opposition to important civil liberties and civil rights legislation.  And beyond that, Sessions:
                    <br />
                    <br />
                    <ul>
                        <li>said the KKK was “okay, until [he] found out they smoked pot”</li>
                        <li>has suggested freedom of religion might not apply to immigrants, and it might be time to consider Trump’s call for a ban on Muslims</li>
                        <li>is so anti-immigrant he has even challenged birthright citizenship</li>
                        <li>has called the NAACP and the ACLU “un-American”</li>
                        <li>once called a white civil rights attorney a “disgrace to his race,” and repeatedly called a Black lawyer “boy"</li>
                        <li>characterized the Voting Rights Act as "a piece of intrusive legislation” and has refused to support legislation to restore it after it was gutted by the Supreme Court</li>
                        <li>stood up for the banking industry when the banks were melting down in 2008</li>
                        <li>pressured Attorney General Janet Reno not to pursue anti-trust charges against Microsoft in the 1990s</li>
                        <li>and defended Donald Trump’s recorded bragging about grabbing women by their genitals by saying, “I don't characterize that as sexual assault."</li>
                    </ul>
                </div>

                <a href="#phone-form" className="call-the-senate">CALL THE SENATE<img src="images/phone.svg" /></a>

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
        let url = `https://dp-call-congress.herokuapp.com/create?db=cwd&campaignId=${config.callCampaignSessions}&userPhone=${number}&source_id=${getSource()}`;

        try {
            if ('zip' in sessionStorage) {
                url += `&zipcode=${sessionStorage.zip}`;
            }
        } catch (err) {
            // Oh well
        }

        request.open('GET', url, true);
        request.send();

        this.props.changeForm('scriptsessions');
    },

    onClickOptOut: function(e) {
        e.preventDefault();

        this.props.changeForm('opt-out');
    },
});

export default StopSessionsPhoneForm