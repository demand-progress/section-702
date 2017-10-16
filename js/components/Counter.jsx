import React, { Component } from 'react'
import { numberWithCommas } from '../utils/'
import state from '../store/state'
import { urls } from '../config/'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signatures: 0
        }
    }

    componentDidMount() {
        window.onFetchSignatureCounts = this.onFetchSignatureCounts.bind(this);
        this.fetchSignatureCounts();
    }

    fetchSignatureCounts() {
        const script = document.createElement('script');
        script.async = true;
        script.src = urls.count;
        document.body.appendChild(script);
    }

    render() {

        let className = 'counter';

        if (state.count > 0) {
            className += ' loaded';
        }

        const signatures = numberWithCommas(state.count);

        return (
            <div className={className}>
                <hr />
                <div className="number-of-signatures">{this.state.signatures}</div>
                <div className="number-of-signatures-label">signatures are in</div>
            </div>
        );
    }

    onFetchSignatureCounts(data) {
        console.log(data);
        this.setState({ signatures: numberWithCommas(data.total.actions) });
    }
}

export default Counter;