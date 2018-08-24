import PropTypes from 'prop-types';
import React from 'react';

import {STEP_3} from '../BladeConstants';
import Blade from './Blade';

export class Step3 extends React.Component {
    render() {
        return (
            <Blade id={STEP_3}>
                <div className="row">
                    <div className="col-12">
                        <h1>Step 3</h1>
                    </div>
                </div>
            </Blade>
        );
    }
}

Step3.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
};

export default Step3;
