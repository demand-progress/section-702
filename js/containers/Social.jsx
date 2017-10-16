import React, { Component } from 'react'
import { urls } from '../config/'

// Email
let emailHref = "mailto:?subject=I%20just%20signed%20this%3A&body=Hi%20-%20I%20just%20took%20action%20against%20Donald%20Trump’s%20horrifying%20picks%20for%20cabinet-level%20roles%20in%20his%20administration.%0A%0ATrump’s%20nominees%20have%20promoted%20white%20nationalism%2C%20attacked%20climate%20science%20and%20used%20their%20power%20as%20Wall%20Street%20insiders%20to%20fleece%20working%20families.%0A%0AI%20just%20signed%20a%20petition%20urging%20the%20Senate%20to%20block%20and%20resist%20any%20Trump%20nominee%20embracing%20hatred%20and%20greed.%20Could%20you%20sign%20too%3F%0A%0Ahttps%3A%2F%2Fwww.BlockTrumpsCabinet.com%2F%3Fsource%3Demail-share";

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