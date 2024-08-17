import React from 'react'

const ThemeSwitch = ({ darkmode, setDarkmode }) => {

    const toggleTheme = () => {
        setDarkmode(!darkmode)
    }

    return (
        <div>
            <div>
                <input type="checkbox" onChange={toggleTheme} id='switch' />
                <label htmlFor="switch">
                    {darkmode ? 'Light Mode' : 'Dark Mode'}
                </label>
            </div>
        </div>
    )
}

export default ThemeSwitch