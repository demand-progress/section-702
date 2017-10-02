import React, { Component } from 'react'

const Contact = React.createClass({
    render: function() {
        return (
            <div className="contact">
                For press inquiries, please contact us at:
                <br />
                <a href="mailto:press@rootstrikers.org">press@rootstrikers.org</a>
            </div>
        );
    },
})

export default Contact