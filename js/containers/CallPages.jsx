import React, { Component } from 'react'
import Header from './Header.jsx'
import Form from './Form.jsx'
import Social from './Social.jsx'
import Organizations from './Organizations.jsx'
import Contact from './Contact.jsx'
import CreativeCommons from './CreativeCommons.jsx'

const CallPages = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <Header />

                <Form />

                <Social />

                <Organizations />

                <Contact />

                <CreativeCommons />
            </div>
        )
    },

    imagesToPreload: [
        'images/phone.svg',
    ],

    componentDidMount: function() {
        for (let i = 0; i < this.imagesToPreload.length; i++) {
            const image = new Image();
            image.src = this.imagesToPreload[i];
        }
    },
});

export default CallPages;