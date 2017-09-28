import React from 'react'
import ReactDOM from 'react-dom'
import { fetchSignatureCounts } from './utils/actionKit'
import CallPages from './containers/CallPages.jsx'
import iecheck from './utils/iecheck'
iecheck()

window.onFetchSignatureCounts = onFetchSignatureCounts

function render() {
    ReactDOM.render(
        <CallPages />,
        document.querySelector('#app')
    );
}

render();
fetchSignatureCounts();

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74199344-9', 'auto');
ga('send', 'pageview');
