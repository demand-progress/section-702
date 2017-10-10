import React, { Component } from 'react'
import { findPos, getSource } from '../utils/'
import EmailForm from '../components/forms/EmailForm.jsx'
import PhoneForm from '../components/forms/PhoneForm.jsx'
import Thanks from '../components/forms/Thanks.jsx'
import OptOutForm from '../components/forms/OptOutForm.jsx'
import PhoneScript from '../components/PhoneScript.jsx'
import state from '../store/state.js'

const Form = React.createClass({
    render: function() {
        let form;
        switch (this.state.form) {
            case 'email':
            form = <EmailForm changeForm={ this.changeForm } />;
            break;

            case 'phone':
            form = <PhoneForm changeForm={ this.changeForm } />;
            break;

            case 'script':
            form = <PhoneScript />;
            break;

            case 'thanks':
            form = <Thanks />;
            break;

            case 'opt-out':
            form = <OptOutForm />;
            break;
        }

        return (
            <div className="form">
                { form }
            </div>
        );
    },

    getInitialState: function () {
        let form = 'email';

        if (state.query.call_tool) {
            form = 'phone';
        }

        if (getSource() === 'mpower') {
            form = 'phone';
        }

        if (state.query.phase) {
            form = state.query.phase;
        }

        if (state.query.debugState) {
            form = state.query.debugState;
        }

        if ('embeddedConfiguration' in window) {
            form = embeddedConfiguration.phase || 'email';
        }

        return {
            form: form,
        };
    },

    changeForm: function(form) {
        this.setState({
            form: form,
        });

        const pos = findPos(this);
        scrollTo(0, pos - 16);
    },
});

export default Form
