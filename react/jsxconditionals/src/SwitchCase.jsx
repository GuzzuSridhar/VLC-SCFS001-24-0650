import React from 'react'

const SwitchCase = (props) => {
    const { salary } = props;

    switch (true) {
        case salary <= 1000:
            return <p className='belowAvg'> A Salary of {salary} is Below Avg </p>
        case salary > 1000 && salary <= 2000:
            return <p className='avg'> A Salary of {salary} is Avg </p>
        case salary > 2000:
            return <p className='AboveAvg'> A Salary of {salary} is Above Avg </p>
        default:
            break;
    }
}

export default SwitchCase


