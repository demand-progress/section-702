import React, { Component } from 'react'
import { urls, hrefEmail } from '../config/'

// Email
let emailHref = hrefEmail
try {
    // These HTML elements are optional
    const emailSubject = encodeURIComponent(document.querySelector('#email-share-subject').textContent.trim());
    const emailBody = encodeURIComponent(document.querySelector('#email-share-body').textContent.trim());
    emailHref = `mailto:?subject=${emailSubject}&body=${emailBody}`;
} catch (err) { }

class Social extends Component {
    render() {
        return (
            <div className="midnight-share-train">
                <div className="share">
                    <a onClick={this.onClickTwitter} target="_blank" href="#Share on Twitter" className="twitter">Tweet</a>
                    <a onClick={this.onClickFacebook} target="_blank" href="#Share on Facebook" className="facebook">Share</a>
                    <a href={emailHref} target="_blank" className="email">Email</a>
                </div>
            </div>
        );
    }

    onClickTwitter(e) {
        e.preventDefault();

        let shareText = document.querySelector('[name="twitter:description"]').content;

        // const source = getSource();
        //
        // if (source) {
        //     shareText += '/?source=' + source;
        // }

        const url = urls.twitter + encodeURIComponent(shareText) + '&ref=demandprogress';

        window.open(url);
    }

    onClickFacebook(e) {
        e.preventDefault();

        var shareUrl = config.link;

        if ('embeddedConfiguration' in window) {
            if (embeddedConfiguration.link) {
                shareUrl = embeddedConfiguration.link;
            }
        }

        let url = urls.facebook + encodeURIComponent(shareUrl + '?source=fb-share');

        // const source = getSource();
        //
        // if (source) {
        //     url += '%3Fsource%3D' + source;
        // }

        window.open(url);
    }
}

export default Social