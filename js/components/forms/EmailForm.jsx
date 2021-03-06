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
                                    <select id="prefix" name="prefix" tabIndex="1" >
                                        <option value="Mr">Mr.</option>
                                        <option value="Mrs">Mrs.</option>
                                        <option value="Ms">Ms.</option>
                                        <option value="Mx">Mx.</option>
                                        <option value="Dr">Dr.</option>
                                        <option value="Rev">Rev.</option>
                                    </select>
                                    <input className="name" name="name" placeholder="Your Name" tabIndex="2" />
                                </div>
                                <label htmlFor="name">Your Full Name</label><br />
                            </div>
                            
                            <div id="email" className="inputBox">
                                <input className="email" name="email" placeholder="Email Address" type="email" tabIndex="3"/>
                                <label htmlFor="email">address@domain.com</label><br />
                            </div>

                            <div id="address" className="inputBox">
                                <input className="address1" name="address1" placeholder="Street Address" tabIndex="4"/>
                                <label htmlFor="address1">123 Main St</label><br />
                            </div>

                            <div id="city" className="inputBox">
                                <input className="city" name="city" placeholder="City" tabIndex="6"/>
                                <label htmlFor="city">Anytown</label><br />
                            </div>                            
                            <div id="state" className="state">
                                <input className="state" name="state" placeholder="State" tabIndex="7"/>
                                <label htmlFor="state">ME</label><br />
                            </div>
                            <div id="zip" className="inputBox">
                                <input className="zip" name="zip" placeholder="Zip code" tabIndex="5"/>
                                <label htmlFor="zip">5 Digit ZIP Code</label><br />
                            </div>
                            <button id="submit" tabIndex="8" ><img src="./images/document-white.svg"/>Sign</button>

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

        const address1 = form.querySelector('[name="address1"]');        
        if (!address1.value.trim()) {
            address1.focus();
            alert("Please enter your address.");
            return;
        }
        const city = form.querySelector('[name="city"]');
        
        if (!city.value.trim()) {
            zip.focus();
            alert('Please enter your city.');
            return;
        }

        const state = form.querySelector('[name="state"]');
        if (!state.value.trim()) {
            state.focus();
            alert('Please enter your state.');
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
            'city': city.value.trim(),
            'state': state.value.trim().toUpperCase(),
            'zip': zip.value.trim(),
            'opt_in': 1,
            'page': config.akPage,
            'source': getSource(),
            'want_progress': 1
        };

        sendFormToActionKit(fields);

        this.props.changeForm('phone');
    }
}

export default EmailForm