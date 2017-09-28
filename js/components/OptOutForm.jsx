import React, { Component } from 'react'

//class OptOutForm extends Component {

class CallPages extends Component{

    constructor(props) {
        super(props)
        numbers: {
        // 'Call the Senate:': '202-335-0610'
       // 'The Office of the Treasury Secretary': '202-622-1100',
        // 'The Office of the White House Chief of Staff': '202-456-3737',
        // 'SEC Chair Mary Jo White': '202-551-2100',
        // 'SEC Commissioner Luis Aguilar': '202-551-2500',
        // 'SEC Commissioner Daniel Gallagher': '202-551-2600',
        // 'SEC Commissioner Kara Stein': '202-551-2800',
        // 'SEC Commissioner Michael Piwowar': '202-551-2700',
        // 'The Office of the SEC General Counsel': '202-551-5100',
        // 'The Domestic Policy Council': '202-456-5594',
        // 'The Office of Public Engagement': '202-456-1097',
        // 'The Office of the Press Secretary': '202-456-3282',
        // 'The White House General Counsel': '202-456-2632',
        // 'The Office of Management and Budget': '202-395-4840',
        // 'White House Operations': '202-456-2500',
        // 'The Domestic Policy Council': '202-456-6515',
        // 'The Office of Administration': '202-456-2861',
        // 'The Council of Economic Advisers': '202-395-5084',
        // 'Hillary Clinton\'s Campaign': '646-854-1432',
        }
    }

    renderNumbers(){
        const numbers = [];

        for (let name in this.numbers) {
            let number = this.numbers[name];

            numbers.push(
                <div className="number">
                    <div className="name">
                        { name }
                    </div>

                    <div className="phone">
                        <a href={ 'tel:' + number }>{ number }</a>
                    </div>
                </div>
            );
        }

        return numbers;
    }

    render() {
        return (
            <div className="opt-out-form">
                <div className="script">
                    Tell them:
                    <div className="spacer" />
                    <div className="suggestion">
                        “With his cabinet nominations, Donald Trump is breaking his promises to be a president for all Americans and to make the economy work for ordinary people, not just wealthy elites.
                        <div className="spacer" />
                        Please fight to block and resist every Trump nominee who embraces hatred and Wall Street greed.
                        <div className="spacer" />
                        In particular, please vote AGAINST enemy of civil rights <strong>Jeff Sessions</strong> for Attorney General, foreclosure king <strong>Steve Mnuchin</strong> (mi-NOO-chin) for Treasury Secretary, and Wall Street billionaire <strong>Wilbur Ross</strong> for Commerce Secretary. Thank you."
                    </div>
                </div>

                <div className="numbers">
                    { this.renderNumbers() }
                </div>
            </div>
        )
    }
}

export default OptOutForm