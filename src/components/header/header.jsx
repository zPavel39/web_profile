import React from 'react'
import './header.scss'

export const Header = () => {
    return (
        <header className="header">
            <nav className='header__navigation'>
            <ul className="header__list">
                <li>About Me</li>
                <li>Contact</li>
                <li>My project</li>
                <li>English</li>
            </ul>
            </nav>
        </header>
    )
}
