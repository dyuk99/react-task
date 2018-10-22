const isXNext = (state = true, action) => {
    switch (action.type) {
        case 'CHECK_SQUARE_X':
            return false;
        case 'CHECK_SQUARE_O':
            return true;
        case 'GO_TO_STEP':
            return (action.stepNumber % 2) === 1
        default:
            return state
    }
}

export default isXNext;
