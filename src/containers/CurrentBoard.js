import { connect } from 'react-redux'
import Board from '../components/Board';
import {checkSquareX, checkSquareO} from '../actions/index'

const calculateWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
            return squares[a].value;
        }
    }
    return null;
}

const calculateAddNumber = squares => {
    return squares.filter(square => {
        return square.value !== '';
    }).length + 1;
}

const mapStateToProps = state => {
    return {
        squares: [...state.squares],
        stepNumber: {...state}.stepNumber,
        isXNext: {...state}.isXNext,
        addNumber: calculateAddNumber([...state.squares]),
        winner: calculateWinner([...state.squares])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSquareXClick: (id, addNumber) => {
            dispatch(checkSquareX(id, addNumber))
        },
        onSquareOClick: (id, addNumber) => {
            dispatch(checkSquareO(id, addNumber))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)