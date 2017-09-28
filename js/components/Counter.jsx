import React, { Component } from 'react'
import { numberWithCommas } from '../utils/'

export default function() {
    let className = 'counter';

    if (state.count > 0) {
        className += ' loaded';
    }

    const signatures = numberWithCommas(state.count);

    return (
        <div className={className}>
            <hr />
            <div className="number-of-signatures">{signatures}</div>
            <div className="number-of-signatures-label">signatures are in</div>
        </div>
    );
}