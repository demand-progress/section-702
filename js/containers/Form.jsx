import React, { Component } from 'react'
import EmailForm from '../components/EmailForm'
import PhoneForm from '../components/PhoneForm'
import PhoneScript from '../components/PhoneScript'
import StopSessionsPhoneForm from '../components/StopSessionsPhoneForm'
import StopSessionsPhoneScript from '../components/StopSessionsPhoneScript'
import BlockMnuchinPhoneForm from '../components/BlockMnuchinPhoneForm'
import DemoPhoneForm from '../components/DemoPhoneForm'
import DemoPhoneScript from '../components/DemoPhoneScript'
import Thanks from '../components/Thanks'
import OptOutForm from '../components/OptOutForm'
import { findPos, getSource } from '../utils/'


const Form = React.createClass({
    changeForm: function(form) {
        this.setState({
            form: form,
        });

        const pos = findPos(this);
        scrollTo(0, pos - 16);
    },
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

            case 'stopsessions':
            form = <StopSessionsPhoneForm changeForm={ this.changeForm } />;
            break;

            case 'scriptsessions':
            form = <StopSessionsPhoneScript />;
            break;

            case 'blockmnuchin':
            form = <BlockMnuchinPhoneForm changeForm={ this.changeForm } />;
            break;

            case 'scriptmnuchin':
            form = <BlockMnuchinPhoneScript />;
            break;

            case 'demophone':
            form = <DemoPhoneForm changeForm={ this.changeForm } />;
            break;

            case 'demoscript':
            form = <DemoPhoneScript />;
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
    }
});

export default Form;