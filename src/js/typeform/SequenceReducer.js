import {
    NEXT_QUESTION,
    QUESTION_ANSWERED
} from './ActionConstants';
import Sequence from './Sequence';
import {
    answerQuestion,
    nextQuestion
} from './Typeform';

const initialState = {
    answers: {},
    progress: [
        'step1'
    ]
};

// selectors
export const getQuestionsInProgress = state => state.spade.progress;

export const getSpadeAnswers = state => state.spade.answers;

const SequenceReducer = function (state = initialState, action) {
    switch (action.type) {
        case NEXT_QUESTION:
            return nextQuestion(state, action, Sequence);
        case QUESTION_ANSWERED:
            return answerQuestion(state, action, Sequence);
        default:
            return state;
    }
};

export default SequenceReducer;
