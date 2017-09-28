import React, { Component } from 'react'
import campaign from '../store/campaign'

export default () => (
    <header>
        <div className="title">
            <span className="first-line">Tell the Senate:</span>
            { campaign.title }
        </div>
    </header>
);