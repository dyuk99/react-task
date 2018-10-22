export const checkSquareX = (id, addNumber) => ({
    type: 'CHECK_SQUARE_X',
    id,
    addNumber
})

export const checkSquareO = (id, addNumber) => ({
    type: 'CHECK_SQUARE_O',
    id,
    addNumber
})

export const goToStep = stepNumber  => ({
    type: 'GO_TO_STEP',
    stepNumber
})

export const toggleTheme = theme  => ({
    type: 'TOGGLE_THEME',
    theme
})
