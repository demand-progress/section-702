import React, { Component } from 'react'
import Counter from '../Counter.jsx'
import { config, hrefEmail } from '../../config/' 
import { sendFormToActionKit } from '../../utils/actionKit'
import { getSource } from '../../utils/index'
import EmailFormCopy from '../../copy/EmailFormCopy.jsx'
import Autocomplete from 'react-google-autocomplete';

// Email
let emailHref = hrefEmail

class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressFields: ['street_number', 'route', 'locality', "administrative_area_level_1", 'postal_code']
        };


        if (getSource() == "directcall") {
            this.props.changeForm('phone');
        }
    }

    render() {
        return (
            <div className="email-form">
                <div className="petition" id="petition">
                    <h3 id="petitionHeader"><img src="./images/document-pink.svg"/> Sign the petition</h3>
                    <div id="form-container" className="the-problem">
                        <form id="form-grid" className="form" onSubmit={ this.onSubmit.bind(this) } ref="form">
                            <div id="name" className="inputBox">
                                <div id="fullName">
                                    <select id="prefix" name="prefix">
                                        <option value="Mr">Mr.</option>
                                        <option value="Mrs">Mrs.</option>
                                        <option value="Ms">Ms.</option>
                                        <option value="Mx">Mx.</option>
                                        <option value="Dr">Dr.</option>
                                        <option value="Rev">Rev.</option>
                                    </select>
                                    <input  className="name" name="name" placeholder="Your Name" />
                                </div>
                                <label htmlFor="name">Your Full Name</label><br />
                            </div>
                            
                            <div id="email" className="inputBox">
                                <input className="email" name="email" placeholder="Email Address" type="email" />
                                <label htmlFor="email">address@domain.com</label><br />
                            </div>

                            <div id="address" className="inputBox">
                                <input className="address1" name="address1" placeholder="Street Address" />
                                <label htmlFor="address1">123 Main Way, ME</label><br />
                            </div>

                            <div id="zip" className="inputBox">
                                <input className="zip" name="zip" placeholder="Zip code" />
                                <label htmlFor="zip">5 Digit ZIP Code</label><br />
                            </div>
                            <button id="submit" ><img src="./images/document-white.svg"/>Sign</button>

                            <EmailFormCopy />

                        </form>
                    </div>
                    <div className="disclaimer">
                        <p>One or more of the participating organizations may contact you about future campaigns.</p>
                    </div>
                    <Counter />

                    <div id="roundBottom"><p></p></div>
                </div>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const prefix = form.querySelector('[name="prefix"]');

        const name = form.querySelector('[name="name"]');
        if (!name.value.trim()) {
            name.focus();
            alert('Please enter your name.');
            return;
        }

        
        const email = form.querySelector('[name="email"]');
        if (!email.value.trim()) {
            email.focus();
            alert('Please enter your email.');
            return;
        } else if (!emailRegex.test(email.value.trim())) {
            email.focus();
            alert('Please enter a valid email.');
            return;
        }

        // if (!this.state['administrative_area_level_1']) {
        //     form.address.focus();
        //     alert("Please enter your address.");
        //     return;
        // }

        const address1 = form.querySelector('[name="address1"]');        
        if (!address1.value.trim()) {
            address1.focus();
            alert("Please enter your address.");
            return;
        }

        const zip = form.querySelector('[name="zip"]');
        if (!zip.value.trim()) {
            zip.focus();
            alert('Please enter your zip.');
            return;
        }

        try {
            sessionStorage.zip = zip.value.trim();
        } catch (err) {
            // Oh well
        }
        const fields = {
            'action_user_agent': navigator.userAgent,
            'country': 'United States',
            'email': email.value.trim(),
            'form_name': 'act-petition',
            'js': 1,
            'prefix': prefix.value.trim(),
            'name': name.value.trim(),
            'address1': address1.value.trim(),
            'zip': zip.value.trim(),
            // 'address1': `${this.state['street_number']} ${this.state['route']}`,
            // 'state': this.state['administrative_area_level_1'],
            // 'city': this.state['locality'],
            // 'zip': this.state['postal_code'],
            'opt_in': 1,
            'page': config.akPage,
            'source': getSource(),
            'want_progress': 1
        };

        // sessionStorage.zip = this.state['postal_code'];

        sendFormToActionKit(fields);

        this.props.changeForm('phone');
    }
}

export default EmailForm