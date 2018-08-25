import {STEP_1, STEP_2, STEP_3} from "../constants/BladeConstants";

const step1 = {
    id: STEP_1,
    predicate: () => true,
    answer: (response) => {
        return {
            [STEP_1]: response
        };
    }
};

const step2 = {
    id: STEP_2,
    predicate: () => true,
    answer: (response) => {
        return {
            [STEP_2]: response
        };
    }
};

const step3 = {
    id: STEP_3,
    predicate: () => true,
    answer: (response) => {
        return {
            [STEP_3]: response
        };
    }
};

/**
* The sequence contains the ordering of questions to be asked.
* Each entry has a predicate function used to determine whether
* the current question will be asked based on the state held in
* the answers.
* Each entry also has an answer function used to return a data
* structure to store the response against.
*/
const Sequence = [
    step1,
    step2,
    step3
];

export default Sequence;
