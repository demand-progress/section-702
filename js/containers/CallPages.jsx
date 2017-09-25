import React, { Component } from 'react'
import Header from './Header'
import Form from './Form'
import Social from './Social'
import Organizations from './Organizations'
import Contact from './Contact'
import CreativeCommons from './CreativeCommons'

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
        );
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