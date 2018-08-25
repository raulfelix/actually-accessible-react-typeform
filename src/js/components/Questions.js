import React from 'react';

import {STEP_1} from '../constants/BladeConstants';
import {scrollBodyTo} from '../utils/Scroll';
import {answerQuestion, nextQuestion} from '../typeform/Typeform';
import Sequence from '../typeform/Sequence';
import Blades from '.';

function scrollPage(id) {
    scrollBodyTo(document.getElementById(id), 400);
}

class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: {},
            progress: [STEP_1]
        };
    }

    componentDidUpdate() {
        // when progress updates adjust screen position to show the last
        // item in the question collection
        scrollPage(this.state.progress[this.state.progress.length - 1]);
    }

    onAnswer(id, value) {
        answerQuestion(this.state, {id, value}, Sequence);
    }

    onNext(bladeId) {
        const state = nextQuestion(this.state, {id: bladeId}, Sequence);
        this.setState(state);
    }

    renderContent() {
        return this.state.progress.map(q =>
            React.createElement(Blades[q], {
                key: q,
                onAnswer: (id, value) => this.onAnswer(id, value),
                onNext: id => this.onNext(id)
            }));
    }

    render() {
        return (
            <main className="app">
                <header>Typeform</header>
                <div className="app__content">
                    {this.renderContent()}
                </div>
            </main>
        );
    }
}

export default Questions;
