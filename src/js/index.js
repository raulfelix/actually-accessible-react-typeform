import React from 'react';
import {render} from 'react-dom';

import Questions from './components/Questions';

import '../scss/app.scss';

function doRender() {
    render(
        <Questions />,
        document.getElementById('app')
    );
}

window.onload = function () {
    doRender();
};
