import React, { Component } from 'react'
import Counter from '../Counter.jsx'
import { config, hrefEmail } from '../../config/' 
import { sendFormToActionKit } from '../../utils/actionKit'
import { getSource } from '../../utils/index'
import EmailFormCopy from '../../copy/EmailFormCopy.jsx' 

// Email
let emailHref = hrefEmail

class EmailForm extends Component {
    constructor(props) {
        super(props);

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
                                        <option value="mr">Mr.</option>
                                        <option value="miss">Miss</option>
                                        <option value="mrs">Mrs.</option>
                                        <option value="ms">Ms.</option>
                                    </select>        
                                    <input  className="name" name="name" placeholder="Your name" autoFocus="autoFocus" />
                                </div>
                                <label htmlFor="name">Your Full Name</label><br />
                            </div>
                            <div id="email" className="inputBox">
                                <input className="email" name="email" placeholder="Email" type="email" />
                                <label htmlFor="email">adress@domain.com</label><br />
                            </div>                            
                            <div id="address" className="inputBox">
                                <input className="address" name="address1" placeholder="Street Address" type="address" />
                                <label htmlFor="address">1234 Main St.</label><br />
                            </div>                            
                            <div id="zip" className="inputBox">
                                <input className="zip" name="zip" placeholder="Zip code" type="tel" />
                                <label htmlFor="zip">5 Digit ZIP Code</label><br />
                            </div>
                            <EmailFormCopy />

                            <button id="submit" ><img src="./images/document-white.svg"/>Sign</button>
                        </form>
                    </div>
                    <div className="disclaimer">
                        One or more of the participating organizations may contact you about future campaigns.
                    </div>
                    <Counter />
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

        const address = form.querySelector('[name="address1"]');
        if (!address.value.trim()) {
            address.focus();
            alert('Please enter your address.');
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
            'name': `${prefix.value} ${name.value.trim()}`,
            'address1': address.value.trim(),
            'opt_in': 1,
            'page': config.akPage,
            'source': getSource(),
            'want_progress': 1,
            'zip': zip.value.trim(),
        };

        sendFormToActionKit(fields);

        this.props.changeForm('phone');
    }
}

export default EmailForm