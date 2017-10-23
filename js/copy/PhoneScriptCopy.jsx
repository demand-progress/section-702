import React from 'react'

const PhoneScriptCopy = (props) => {
    return (
        <div>
            <h2>We’re calling you now.</h2>
            <h3>After the conversation, you can <strong>press *</strong> and we’ll connect you to the next office.</h3>
            <div className="spacer" />           
            <p><strong>Here's what you can say:</strong></p>
            <p>“Hi, my name is [NAME] and I live in [TOWN]. I’m calling to urge my members of Congress to support strong surveillance reform to stop spy agencies from spying on Americans without a warrant.</p>
            <br />
            <p><strong>Tell your House Rep:</strong> The proposed “USA Liberty Act,” H.R. 3989, needs wholesale improvements before you should consider supporting it.</p>
            <br />
            <p><strong>Tell your Senators:</strong> Please co-sponsor and support the USA RIGHTS Act from Senators Paul and Wyden, which would stop warrantless spying on Americans.</p>
            <br />
            <p><strong>Tell both:</strong> Any reauthorization of Section 702 of the FISA Amendments Act must include:</p>
            <ul id="points">
                <li>an end to backdoor searches</li>
                <li>a permanent ban on “about” collection</li>
                <li>a guarantee that the government cannot secretly use surveillance information in court against defendants.</li>
                </ul>
                <br />
                <p>Without these reforms, Section 702 should be allowed to expire in December.</p>
        </div>
    )
}

export default PhoneScriptCopy