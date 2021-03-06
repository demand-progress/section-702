import React, { Component } from 'react'
import Header from './Header.jsx'
import Form from './Form.jsx'
import Social from './Social.jsx'
import Organizations from './Organizations.jsx'
import Contact from './Contact.jsx'
import CreativeCommons from './CreativeCommons.jsx'
import BodyCopy from '../copy/BodyCopy.jsx'

class CallPages extends Component {

    imagesToPreload(){
        return ['images/phone.svg']
    }

    componentDidMount() {
        for (let i = 0; i < this.imagesToPreload.length; i++) {
            const image = new Image();
            image.src = this.imagesToPreload[i];
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />

                <Form />

                <BodyCopy />

                <Social />

                <Organizations />

                <Contact />

                <CreativeCommons />
            </div>
        );
    }
}

export default CallPages