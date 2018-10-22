import { connect } from 'react-redux'
import {toggleTheme} from '../actions/index'
import Game from '../components/Game'
import React from 'react'
import {ThemeProvider} from 'react-jss'

const mapStateToProps = state => {
    return {
        themeName: {...state}.theme
    }
}

const App = ({themeName, toggleTheme}) => (
    <ThemeProvider theme={themeName}>
        <Game toggleTheme={toggleTheme} />
    </ThemeProvider>
);

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: () => {
            dispatch(toggleTheme())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)