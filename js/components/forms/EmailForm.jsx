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
                                    <select id="nameTitle" name="title">
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
                                <Autocomplete
                                    ref={ auto => this.autoComplete = auto }
                                    style={{width: '100%'}}
                                    onPlaceSelected={(place) => {
                                        for (let c in place.address_components) {
                                        console.log("component", c);
                                            for (let t in place.address_components[c].types) {
                                            console.log("type", t);
                                                if (t in this.state.addressFields) {
                                                    this.setState({t: c.long_name});
                                                }
                                            }
                                        }
                                        console.log("place", place);
                                        console.log(this.state);
                                    }}
                                    types={['address']}
                                    componentRestrictions={{country: "us"}}
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

        const title = form.querySelector('[name="title"]');

        const name = form.querySelector('[name="name"]');
        if (!name.value.trim()) {
            name.focus();
            alert('Please enter your name.');
            return;
        }

        const address = form.address;
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
            'name': `${title.value} ${name.value.trim()}`,
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