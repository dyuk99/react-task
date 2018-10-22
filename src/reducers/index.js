import { combineReducers } from 'redux'
import squares from './square'
import stepNumber from './stepNumber'
import isXNext from './isXNext'
import theme from './theme'

export default combineReducers({
    squares,
    stepNumber,
    isXNext,
    theme
})