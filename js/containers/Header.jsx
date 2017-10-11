import React, { Component } from 'react'
 
import { articles } from '../store/articles' 


class Header extends Component {
    // title and random article
    constructor(props) {
        super(props);

        var queryParams
        if(window.location.search){
            queryParams = JSON.parse('{"' + decodeURI(window.location.search.replace("?","").replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');            
        }
        console.log("queryParams", queryParams);
        if (!queryParams){
            location.replace(location.href + "?title=Heeeey")
            
            // this.state = {
            //     title: 'Wowee!',
            //     text: 'Ample sample'
            // };
            return;
        }
        if (!queryParams['text']){
            location.replace(location.href + "&text=" + this._copyPicker(articles.length));
        } else {
            this.state = {
                title: queryParams['title'],
                text: articles[queryParams['text']].body
            };
        }
    }

    _copyPicker(qty) {
        return Math.floor(Math.random() * qty);
    }
    render() {
        console.log(this.state.title);
        return (
            <header>
                <div className="fixed-trump"></div>
                <div className="title">
                    <span className="tell-congress">Tell Congress</span>
                    <br/>
                    <span className="dont-give-trump-unc">{ this.state.title }</span>
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