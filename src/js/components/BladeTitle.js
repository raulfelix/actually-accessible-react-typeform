import React from 'react';

const BladeTitle = function({label}) {
    return (
        <h1 className="blade__title" tabIndex="-1">{label}</h1>
    );
};

export default BladeTitle;