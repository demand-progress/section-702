import React from 'react'

const PhoneScriptCopy = (props) => {
    return (
        <div className="phone-script">
            <em>We’re calling you now. <br /> 
                After the conversation, you can <strong>press *</strong> and we’ll connect you to the next office.
            </em>
            <div className="spacer" />

            <p><strong>Here’s what you can say:</strong></p>
            <p>“Hi, my name is [NAME] and I live in [TOWN]. I’m calling to urge my members of Congress to oppose the “USA Liberty Act,” H.R. 3989, unless it is strengthened to stop spying on Americans without a warrant.</p>
            <p>Any reauthorization of Section 702 of the FISA Amendments Act must include:</p>
            <li>an end to backdoor searches,</li>
            <li>a permanent ban on “about” collection, and</li>
            <li>a guarantee that the government cannot secretly use surveillance information in court against defendants. </li>
            <p>Without these reforms, Section 702 should be allowed to expire in December.</p>
            <div className="spacer" />

            <div className="calling-wrapper">
                <h3>After your call(s), use the form to let us know how it went!</h3>
                
                {/* <AfterCallForm submit={props.onSubmit}/> */}
                <form action="#" method="get" className={this.state.sent ? 'sent' : false}>
                    <div className="wrapper">
                        <h4>Who did you speak with?</h4>
                        <input required="required" type="text" name="Who did you speak with?" id="who" />
                        <h4>How did it go?</h4>
                        <input required="required" type="text" name="How did it go?" id="how" />
                        <br />
                        <div id="thanks">Thank you!</div>
                        <button onClick={props.onSubmit} type="submit" name="submit">Send Feedback</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default PhoneScriptCopy