import PropTypes from 'prop-types';
import React from 'react';

import {STEP_2} from '../BladeConstants';
import Blade from './Blade';

export class Step2 extends React.Component {
    onAnswer() {
        this.props.onAnswer(STEP_2, true);
        this.props.onNext(STEP_2);
    }

    render() {
        return (
            <Blade id="Step2">
                <div className="row">
                    <div className="col-12">
                        <h1>Step 2</h1>
                        <button
                          type="button"
                          className="blade-action"
                          onClick={() => this.onAnswer()}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Blade>
        );
    }
}

Step2.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
};

export default Step2;
