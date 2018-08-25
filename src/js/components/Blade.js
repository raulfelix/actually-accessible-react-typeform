import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Blade extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // find focusable element
            // this should be generalised to be any sort of interactive element
            const node = ReactDOM.findDOMNode(this);
            node.querySelector('.blade__title').focus();
        }, 300);
    }

    render() {
        const classes = ['blade'];
        const {id, className, children} = this.props;

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
    }
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
