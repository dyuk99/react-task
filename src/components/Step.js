import React from 'react'
import PropTypes from 'prop-types'

const Step = ({value, onClick}) => (
    <li key={value}>
        <button onClick={onClick}>{"Go to move #"+(value+1)}</button>
    </li>
);

Step.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default Step;
