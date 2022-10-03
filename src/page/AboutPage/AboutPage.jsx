import React from 'react'
import './AboutPage.scss'

export const AboutPage = () => {
    return (
        <div className='about'>
            <div className="about__title">
                <h1>Pavel Golubev</h1>
                <span>Front-End Developer</span>
            </div>
            <h2 className="about__caption">Education:</h2>
            <div className="about__list">
                <span className="about__list_year">2012 year:</span>
                <p className="about__list_info">
                    Coast Guard Institute, Automated information processing and control systems (by industry), technician
                </p>
                <span className="about__list_year">2018 year:</span>
                <p className="about__list_info">
                    Kaliningrad State Technical University, Kaliningrad Faculty of Automation and Production
                    Management, Applied Computer Science. bachelor
                </p>
                <span className="about__list_year">2022 year:</span>
                <p className="about__list_info">
                    Frontend Development (Innopolis University)
                </p>
            </div>
        </div>
    )
}