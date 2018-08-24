import PropTypes from 'prop-types';
import React from 'react';

import {STEP_1} from '../BladeConstants';
import Blade from './Blade';

export class Step1 extends React.Component {
    onAnswer() {
        this.props.onAnswer(STEP_1, true);
        this.props.onNext(STEP_1);
    }

    render() {
        return (
            <Blade id={STEP_1}>
                <div className="row">
                    <div className="col-12">
                        <h1>Step 1</h1>
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

Step1.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
};

export default Step1;
