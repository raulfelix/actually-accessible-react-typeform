import PropTypes from 'prop-types';
import React from 'react';

import {STEP_1} from '../constants/BladeConstants';
import Blade from './Blade';
import BladeTitle from './BladeTitle';

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
                        <BladeTitle label="Step 1" />
                        <button
                          type="button"
                          className="blade-action"
                          onClick={() => this.onAnswer()}
                        >
                            Lets start!
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
