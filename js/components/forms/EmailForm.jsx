import React, { Component } from 'react'
import Counter from '../Counter.jsx'
// import BodyCopy from '../BodyCopy.jsx'
import { bodyText } from '../../store/campaign' 
import { config } from '../../store/config' 
import sendFormToActionKit from '../../utils/actionKit'

let emailHref = "mailto:?subject=I%20just%20signed%20this%3A&body=Hi%20-%20I%20just%20took%20action%20against%20Donald%20Trump’s%20horrifying%20picks%20for%20cabinet-level%20roles%20in%20his%20administration.%0A%0ATrump’s%20nominees%20have%20promoted%20white%20nationalism%2C%20attacked%20climate%20science%20and%20used%20their%20power%20as%20Wall%20Street%20insiders%20to%20fleece%20working%20families.%0A%0AI%20just%20signed%20a%20petition%20urging%20the%20Senate%20to%20block%20and%20resist%20any%20Trump%20nominee%20embracing%20hatred%20and%20greed.%20Could%20you%20sign%20too%3F%0A%0Ahttps%3A%2F%2Fwww.BlockTrumpsCabinet.com%2F%3Fsource%3Demail-share";
try {
    // These HTML elements are optional
    const emailSubject = encodeURIComponent(document.querySelector('#email-share-subject').textContent.trim());
    const emailBody = encodeURIComponent(document.querySelector('#email-share-body').textContent.trim());
    emailHref = `mailto:?subject=${emailSubject}&body=${emailBody}`;
} catch (err) { }

class EmailForm extends Component {
    render() {
        return (
            <div className="email-form">
                <div className="petition" id="petition">
                    <h3><img src="./images/document-pink.svg"/> Sign the petition</h3>

                    <div id="form-container" className="the-problem">
                        {/* <div className="form-container"> */}
                            <form id="form-grid" className="form" onSubmit={ this.onSubmit } ref="form">
                                <div id="name" className="inputBox">
                                    <label htmlFor="name">Your Full name</label><br />
                                    <input  className="name" name="name" placeholder="Your name" autoFocus="autoFocus" />
                                </div>
                                <div id="zip" className="inputBox">
                                    <label htmlFor="zip">5-Digit Zip Code</label><br />
                                    <input className="zip" name="zip" placeholder="Zip code" type="tel" />
                                </div>
                                <div id="email" className="inputBox">
                                    <label htmlFor="email">address@domain.com</label><br />
                                    <input className="email" name="email" placeholder="Email" type="email" />
                                </div>
                                <p id="text" >
                                    <strong>Donald Trump’s first appointments to cabinet-level roles in his administration are horrifying.</strong> Trump’s nominees and rumored picks have promoted white nationalism, attacked climate science, and used their power as Wall Street insiders and corporate lobbyists to fleece working families.
                                    <div className="spacer" />
                                    <p>As representatives of all Americans, you must stand up against hatred and greed. Fight to block and resist every Trump nominee who embraces racism, xenophobia, misogyny, homophobia, climate denial, and Wall Street greed.</p>
                                </p>
                                <button id="submit" ><img src="./images/document-white.svg"/>Sign</button>
                            </form>
                        {/* </div> */}
                    </div>

                    <div className="disclaimer">
                        One or more partner groups may send you updates on this and other important campaigns
                    </div>

                    <Counter />
                </div>

                <bodyText />

            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();

        const form = this.refs.form;

        const name = form.querySelector('[name="name"]');
        if (!name.value.trim()) {
            name.focus();
            alert('Please enter your name.');
            return;
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
            'name': name.value.trim(),
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