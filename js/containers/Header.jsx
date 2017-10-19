import React, { Component } from 'react'
import { articles, origin } from '../store/articles' 


class Header extends Component {
    // title and random article
    constructor(props) {
        super(props)

        var queryParams;
        if(window.location.search){
            queryParams = JSON.parse('{"' + decodeURI(window.location.search.replace("?","").replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');            
        }
        if (!queryParams) {
            location.replace(location.href + "?origin=default");
            return;
        }
        if (!queryParams['text']){
            location.replace(location.href + "&text=" + this._copyPicker(articles.length));
        } else {
            this.state = {
                title: origin[queryParams['origin']].title,
                subTitle: origin[queryParams['origin']].subTitle,
                text: articles[queryParams['text']].body
            };
        }
    }

    _copyPicker(qty) {
        return Math.floor(Math.random() * qty);
    }
    render() {
        if (!('title' in this.state)) {
            this.setState({title: ""})
        }
        if (!('subTitle' in this.state)) {
            this.setState({subTitle: ""})
        } 
        // console.log(this.state.origin);
        return (
            <header>
                <div className="fixed-trump"></div>
                <div className="title">
                    <span className="tell-congress">{ this.state.title }</span>
                    <br/>
                    <span className="dont-give-trump-unc">{ this.state.subTitle }</span>
                    <br/>
                    <span className="congress-is-debating">
                        { this.state.text }
                    </span>
                </div>
            </header>
        )
    }
}

export default Header