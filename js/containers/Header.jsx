import React, { Component } from 'react'
import { articles, origin } from '../store/articles'
import getQueryVariables from '../utils/getQueryVariables'


class Header extends Component {
    // title and random article
    constructor(props) {
        super(props);

        var queryParams = getQueryVariables(window.location.search.substr(1).split('&'));

        if (Object.keys(queryParams).length === 0 && queryParams.constructor === Object) { // check for no query params
            location.replace(location.href + "?origin=default&text=0");
            return;
        }

        if (!('origin' in queryParams)) {
            queryParams['origin'] = 'default';
        }
        
        if (!queryParams['text']) {
            location.replace(location.href + "&text=0");
        } else {
            this.state = {
                title: origin[queryParams['origin']].title,
                subTitle: origin[queryParams['origin']].subTitle,
                text: articles[queryParams['text']].body
            };
        }
    }

    render() {
        if (!('title' in this.state)) {
            this.setState({title: ""})
        }
        if (!('subTitle' in this.state)) {
            this.setState({subTitle: ""})
        } 
        return (
            <header>
                <div className="fixed-trump"></div>
                <div className="title">
                    <span className="tell-congress">{ this.state.title }</span>
                    <br/>
                    <span className="dont-give-trump-unc">{ this.state.subTitle }</span>
                    <br/>
                    <p className="congress-is-debating">
                        { this.state.text }
                    </p>
                </div>
            </header>
        )
    }
}

export default Header