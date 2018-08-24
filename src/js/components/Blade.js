import PropTypes from 'prop-types';
import React from 'react';

const Blade = function ({id, className, children}) {
    const classes = ['blade'];

    if (className) {
        classes.push(className);
    }
    return (
        <div id={id} className={classes.join(' ')}>
            <div className="blade__content">
                {children}
            </div>
        </div>
    );
};

Blade.defaultProps = {
    className: '',
    children: []
};

Blade.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Blade;
