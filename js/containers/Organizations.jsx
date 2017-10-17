import React from 'react'

const Organizations = () => (
    <div className="organizations">
        <div className="clamp">
            <h4>Site created by</h4>
            <div className="larger">
                <a title="Demand Progress" href="https://demandprogress.org" target="_blank"><img src="images/logos/demandprogress-logo-new-stacked.png" /></a>
            </div>

            <h4>In partnership with</h4>
            <div className="smaller">
                {/* <a title="18 Million Rising" href="http://18millionrising.org/" target="_blank"><img src="images/logos/18mr_logo_short.png" /></a> */}
            </div>
        </div>
    </div>
);

export default Organizations