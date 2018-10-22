import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'


const Board = ({squares, isXNext, onSquareOClick, onSquareXClick, stepNumber, winner, addNumber}) =>  (
    <div>
        <p>step: {stepNumber}</p>
        {squares.map((square, index) => (
            <Square key={index} value={square.value} onClick={() => {
                if (square.value === '' && !winner) {
                    if (isXNext)
                        onSquareXClick(index, addNumber);
                    else
                        onSquareOClick(index, addNumber);
                }
            }}/>
        ))}
        <p>{(winner) ? 'Winner: ' + winner : 'Next player: ' + (isXNext ? 'X' : 'O')}</p>
    </div>
);

Board.propTypes = {
    squares: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            addNumber: PropTypes.number
        }).isRequired
    ).isRequired,
    stepNumber: PropTypes.number.isRequired,
    isXNext: PropTypes.bool.isRequired,
    onSquareXClick: PropTypes.func.isRequired,
    onSquareOClick: PropTypes.func.isRequired
}

export default Board;