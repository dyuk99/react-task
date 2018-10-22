const stepNumber = (state = 0, action) => {
    switch (action.type) {
        case 'CHECK_SQUARE_X':
            return state + 1;
        case 'CHECK_SQUARE_O':
            return state + 1;
        case 'GO_TO_STEP':
            return action.stepNumber-1;
        default:
            return state
    }
}

export default stepNumber;
