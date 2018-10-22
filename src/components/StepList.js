import React from 'react'
import PropTypes from 'prop-types'
import Step from './Step'

const StepList = ({steps, onStepButtonClick}) => (
    <ul>
        {steps.map((step,index) =>
            <Step key={step} value={index} onClick={() => {onStepButtonClick(step)}}/>
        )}
    </ul>
);

StepList.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.number
    ).isRequired,
    onStepButtonClick: PropTypes.func.isRequired
}

export default StepList;
