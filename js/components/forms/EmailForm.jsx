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
                                        <option value="mx">Mx.</option>
                                        <option value="mr">Mr.</option>
                                        <option value="mrs">Mrs.</option>
                                        <option value="ms">Ms.</option>
                                        <option value="dr">Dr.</option>
                                        <option value="rev">Rev.</option>
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
                                <Autocomplete
                                    ref={ auto => this.autoComplete = auto }
                                    style={{width: '100%'}}
                                    onPlaceSelected={(place) => {
                                        for (let c in place.address_components) {
                                            for (let t in place.address_components[c].types) {
                                                if (t in this.state.addressFields) {
                                                    this.setState({ [place.address_components[c].types[t]] : place.address_components[c].long_name });
                                                }
                                            }
                                        }

                                    }}
                                    types={['address']}
                                    componentRestrictions={{country: "us"}}
                                    className="address"
                                    placeholder="Street Address"
                                    name="address"
                                />
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

        if (!this.state['administrative_area_level_1']) {
            form.address.focus();
            alert("Please enter your address.");
            return;
        }

        const fields = {
            'action_user_agent': navigator.userAgent,
            'country': 'United States',
            'email': email.value.trim(),
            'form_name': 'act-petition',
            'js': 1,
            'prefix': prefix.value.trim(),
            'name': name.value.trim(),
            'address1': `${this.state['street_number']} ${this.state['route']}`,
            'state': this.state['administrative_area_level_1'],
            'city': this.state['locality'],
            'zip': this.state['postal_code'],
            'opt_in': 1,
            'page': config.akPage,
            'source': getSource(),
            'want_progress': 1
        };

        sessionStorage.zip = this.state['postal_code'];

        sendFormToActionKit(fields);

        this.props.changeForm('phone');
    }
}

export default EmailForm