import React, { Component } from 'react'

export default React.createClass({
    render: function() {
        return (
            <div className="email-form">
                <div className="petition" id="petition">
                    <h3>Petition to members of the U.S. Senate:</h3>

                    Donald Trump’s first appointments to cabinet-level roles in his administration are horrifying. Trump’s nominees and rumored picks have promoted white nationalism, attacked climate science, and used their power as Wall Street insiders and corporate lobbyists to fleece working families.
                    <div className="spacer" />

                    As representatives of all Americans, you must stand up against hatred and greed. Fight to block and resist every Trump nominee who embraces racism, xenophobia, misogyny, homophobia, climate denial, and Wall Street greed.

                    <form onSubmit={ this.onSubmit } ref="form">
                        <input className="name" name="name" placeholder="Your name" autoFocus="autoFocus" />
                        <input className="email" name="email" placeholder="Email" type="email" />
                        <input className="zip" name="zip" placeholder="Zip code" type="tel" />
                        <button>
                            Sign the Petition
                        </button>
                    </form>

                    <div className="disclaimer">
                        One or more partner groups
                        may send you updates on this and other important campaigns by email. If at any time you would like to unsubscribe from any of these email lists, you may do so.
                    </div>

                    <Counter />
                </div>

                <BodyCopy />

            </div>
        );
    },

    onSubmit: function(e) {
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
            // 'opt_in': 1,
            'page': config.akPage,
            'source': getSource(),
            'want_progress': 1,
            'zip': zip.value.trim(),
        };

        sendFormToActionKit(fields);

        this.props.changeForm('phone');
    },
});