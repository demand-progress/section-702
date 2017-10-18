import React, { Component } from 'react'
import { numbers } from '../../config/'

class OptOutForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signatures: 0
        }
    }

    renderNumbers() {
        const numberList = [];

        for (let name in numbers) {
            let number = numbers[name];

            numberList.push(
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

        return numberList;
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