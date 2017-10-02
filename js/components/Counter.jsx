import React, { Component } from 'react'
import { fetchSignatureCounts, onFetchSignatureCounts, numberWithCommas } from '../utils/'
import state from '../store/state'
import { urls } from '../store/config'

const Counter = () => {
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

export default Counter