import { connect } from 'react-redux'
import StepList from '../components/StepList';
import {goToStep} from '../actions/index'

const squaresToSortedButtonsList = squares => {
    return squares.filter(square => {
        return square.addNumber !== undefined;
    }).map(square => {
        return square.addNumber;
    }).sort((a, b) => {
        return a-b;
    });
}

const mapStateToProps = state => {
    console.log(squaresToSortedButtonsList([...state.squares]));
    return {
        steps: squaresToSortedButtonsList([...state.squares])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStepButtonClick: stepNumber => {
            dispatch(goToStep(stepNumber))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepList)