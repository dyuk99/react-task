const squares = (state = Array(9).fill({value: '', addNumber: undefined}), action) => {
    switch (action.type) {
        case 'CHECK_SQUARE_X':
            return state.map((square, index) => (
                (index === action.id && square.value === '')
                    ? {...square, value: 'X', addNumber: action.addNumber}
                    : square
            ))
        case 'CHECK_SQUARE_O':
            return state.map((square, index) => (
                (index === action.id && square.value === '')
                    ? {...square, value: 'O', addNumber: action.addNumber}
                    : square
            ))
        case 'GO_TO_STEP':
            return state.map(square => (
                (square.addNumber < action.stepNumber || square.addNumber === undefined)
                    ? square
                    : {...square, value: '', addNumber: undefined}
            ))
        default:
            return state
    }
}

export default squares;
