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
                <span className="about__list_year">2012 год:</span>
                <p className="about__list_info">
                    Институт береговой охраны, Автоматизированные системы обработки информации и управления (по отраслям), техник
                </p>
                <span className="about__list_year">2018 год:</span>
                <p className="about__list_info">
                    Калининградский государственный технический университет, Калининградский факультет автоматизации и производства, Прикладная информатика. бакалавр
                </p>
                <span className="about__list_year">2022 год:</span>
                <p className="about__list_info">
                    Университет Иннополис, Frontend Development
                </p>
            </div>
        </div>
    )
}