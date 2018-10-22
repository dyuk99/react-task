const lightTheme = {
    color: 'black',
    bgColor: 'white'
}

const darkTheme = {
    color: 'white',
    bgColor: 'black'
}

const theme = (state = lightTheme, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return (state === lightTheme) ? darkTheme : lightTheme;
        default:
            return state
    }
}

export default theme;
