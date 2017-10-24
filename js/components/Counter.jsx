import React, { Component } from 'react'
import { numberWithCommas } from '../utils/'
//import state from '../store/state'
import { urls } from '../config/'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signatures: 0
        }
    }

    componentDidMount() {
        window.onFetchSignatureCounts = this.onFetchSignatureCounts;
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

        if (this.state.signatures > 0) {
            className += ' loaded';
        }

        const signatures = numberWithCommas(this.state.signatures);

        let display = null;
        if (this.state.signatures > 1000) {
            display = <div><hr /><div className="number-of-signatures">{signatures}</div><div className="number-of-signatures-label">signatures are in</div></div>;
        } else {
            display = <div></div>;
        }

        return (
            <div className={className}>
                { display }
            </div>
        );
    }

    onFetchSignatureCounts(data) {
        this.setState({ signatures: numberWithCommas(data.total.actions) });
    }
}

export default Counter;