import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header = () => {
    return (
        <header className="header">
            <nav className='header__navigation'>
                <ul className="header__list">
                    <li><Link className='header__list_link' to='/about' >About Me</Link></li>
                    <li><Link className='header__list_link' to='/project'>My project</Link></li>
                </ul>
                <a href='https://github.com/zPavel39'><img src='/logo3.png' /></a>
            </nav>
        </header>
    )
}
