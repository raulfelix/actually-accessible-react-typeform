const getLastStepInProgress = state => state.progress[state.progress.length - 1];

/**
 * Get the step index.
 * @param {String} step
 * @param {Array} collection
 * @return {String}
 */
function getPositionByStep(step, collection) {
    return collection.findIndex(c => c.id === step);
}

/**
 * Given the step - find the next step in the sequence by finding
 * the first predicate which evaluates to true.
 * @param {String} step
 * @param {Object} answers
 * @return {String}
 */
function getNextStep(step, answers, sequence) {
    const position = getPositionByStep(step, sequence);

    if (position > -1) {
        for (let i = position + 1; i < sequence.length; i += 1) {
            const result = sequence[i].predicate(answers);

            if (result === true) {
                return sequence[i].id;
            }
        }
    }
    return null;
}

/**
 * Push the next step onto the collection if it is defined.
 * @param {String} step
 * @param {Array} collection
 */
function addStep(step, collection) {
    const progress = collection.slice(0);

    if (step) {
        progress.push(step);
    }
    return progress;
}

/**
 * Run an onBefore callback if it is present on the
 * qiven sequence step.
 * @param {String} stepId
 * @param {Object} answers
 */
function checkBeforeNext(stepId, answers, sequence) {
    const stepInstance = sequence.find(s => s.id === stepId);

    if (stepInstance && stepInstance.onBeforeNext) {
        const result = stepInstance.onBeforeNext(answers);

        if (result) {
            return result;
        }
    }
    return null;
}

/**
 * Get the next step from the sequence.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export function nextQuestion(state, action, sequence) {
    const step = action.id;
    const progress = state.progress.slice(0);
    let position = 0;
    let nextStep = checkBeforeNext(step, state.answers, sequence);

    if (nextStep === null) {
        nextStep = getNextStep(step, state.answers, sequence);
    }

    if (nextStep !== null) {
        if (step !== getLastStepInProgress(state)) {
            // if user actions a previously answered question
            // remove the steps before this question and make decision again
            position = progress.findIndex(id => id === step) + 1;
            progress.splice(position, progress.length - position);
        }
    }

    return Object.assign({}, state, {
        progress: addStep(nextStep, progress)
    });
}

/**
 * Find the question in the sequence and apply the given value
 * as the response.
 * @param {Object} state
 * @param {Object} action
 */
export function answerQuestion(state, action, sequence) {
    const value = sequence.find(q => q.id === action.id).answer(action.value, state.answers);
    const answers = Object.assign(
        state.answers,
        value
    );

    return Object.assign({}, state, {answers});
}
