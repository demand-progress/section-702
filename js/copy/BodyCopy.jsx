import React from 'react'
import { getSource } from '../utils/index'

const BodyCopy = () => {
    return (
        <div className="paragraph" style={{'backgroundColor': '#ffffff'}}>
            <h3>Section 702 Lets Spy Agencies Snoop on Americans – Without a Warrant.</h3>
            <p>In an end run around the Constitution, spy agencies have warped Section 702 of the FISA Amendments Act into a way to unconstitutionally snoop on Americans.</p>
            <br />
            <p>The law was intended to allow intelligence agencies to monitor communications of foreign individuals outside the United States. But spy agencies like the NSA have claimed this authority allows them to scan through and collect the emails and phone calls of innocent Americans. Then, the government routinely does “backdoor searches” of this information, where they may look up information about U.S. persons, even for reasons completely unrelated to intelligence gathering.</p> 
            <br />
            <p>It’s the same law the NSA claims justified the scandalous programs uncovered by Edward Snowden, like the PRISM program, which forces tech companies to turn over data on their servers, and Upstream collection, which automatically searches all internet traffic that crosses tapped lines connecting the U.S. with the rest of the world.</p>
            <br />
            <p>Flying in the face of the Fourth Amendment, the government searches this information specifically for Americans at least tens of thousands of times a year without a warrant, without evidence of a crime, and without independent oversight.</p>
            <br />

            <h3>The So-Called “USA Liberty Act” Would Not Stop Trump From Spying on People in the U.S.</h3>
            <p>The so-called “USA Liberty Act” (H.R. 3989), which was recently introduced in the House, must be significantly improved or give way to a strong surveillance reform. Here’s why:</p>
            <ul id="points">
                <br />
                <li><strong>It doesn’t stop backdoor searches,</strong> which is when the government searches through the hundreds of millions of communications it collects yearly for information on Americans and people on U.S. soil – all without a warrant. Instead, the bill okays accessing and sharing this information for foreign intelligence purposes, a loophole big enough to drive a truck through.</li>
                <br />
                <li><strong>It fails to permanently end "about" collection,</strong> an illegal practice the NSA says they've stopped that allows for warrantless spying on Americans’ communications that merely mention an intelligence target. Collections should be limited to communications that are "to" or "from" a target.</li>
                <br />
                <li><strong>It doesn’t prevent the government from secretly using surveillance information in court against defendants.</strong> Despite tens of thousands of searches by the government of Section 702 data, only a handful of defendants have ever received notice of it – and only after the Department of Justice was caught misleading the Supreme Court about its practices.</li>
                <br />
                <li><strong>It doesn’t stop Section 702 information from being used in investigations and prosecutions that have nothing to do with national security,</strong> because the bill doesn’t place any meaningful limits on when and how data collected under Section 702 can be shared with other agencies or used in court.</li>
                <br />
                <li><strong>It gives the NSA too many free passes.</strong> The bill adds some transparency measures but doesn’t enforce them, giving the NSA leeway to ignore transparency reports to Congress, and only a small amount of information would trickle out to the public. And there’s no independent oversight into how President Trump and Attorney General Sessions interpret the law.</li>
                <br />
            </ul>
            <br />

            <h3>Spying Powers Are Already Being Abused. Under Trump Things Could Get Far Worse.</h3>
            <p>Even before a would-be authoritarian like Trump took power, the spying powers on the books have been abused consistently. The government has shown a persistent inability to follow rules that are supposed to protect Americans, as chronicled in a <a href="https://s3.amazonaws.com/demandprogress/reports/FISA_Violations.pdf" target="_blank">2017 report by Demand Progress.</a></p>
            <br />
            <p>Judges on the FISA Court have called the violations “a very serious Fourth Amendment issue” and complained of “an institutional ‘lack of candor’” from the spy agencies.</p>
            <br />
            <p>Surveillance powers have been turned against activists and people of color in the past, from the FBI’s intimidation campaign against Martin Luther King, Jr. to recent infiltration of Muslim student associations on college campuses. With Trump’s clear authoritarian impulses and tendency to target vulnerable populations, Congress extending these spying powers to Trump would be catastrophic.</p>

            <h3>The USA RIGHTS Act Would Put the Right Limits on Spying Powers</h3>
            <p>The USA RIGHTS Act from Senators Rand Paul and Ron Wyden has important reforms to rein in Section 702 spying powers. It protects the privacy of Americans' phone calls and emails and is markedly better than all other current legislative proposals.</p>
            <br />
            <p>The USA RIGHTS Act creates a search warrant requirement that closes the backdoor search loophole, permanently ends “about” collection, requires the government to tell defendants when it uses surveillance information against them in court, and much more. The Senate should pass the bill without delay.</p>
            <div className="spacer"></div>
            <div className="spacer"></div>
            
            <a href="#petition" className="sign-the-petition" style={(getSource() == "directcall") ? { display: 'none' } : {} }>Sign the petition if you agree.</a>
            <a href="#petition" className="sign-the-petition" style={(getSource() == "directcall") ? { } : { display: 'none' } }>Call congress if you agree</a>
        </div>
    )

}

export default BodyCopy