import React from 'react'

function Ifelse(props) {
    const { salary } = props;
    if (salary <= 1000)
        return <p className='belowAvg'> A Salary of {salary} is Below Avg</p>

    else if (salary > 1000 && salary <= 1999)
        return <p className='avg'> A Salary of {salary} is Avg</p>

    else if (salary > 2000)
        return <p className='aboveAvg'> A Salary of {salary} is Above Avg</p>


}

export default Ifelse