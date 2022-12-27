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
            <h2 className="about__caption">About me:</h2>
            <div className="about__list">
                <span className="about__list_year">Аналитическое мышление и внимательность:</span>
                <p className="about__list_info">
                Cистематизирую полученную информацию и делаю по ней выводы. Перед тем, как писать код, изучаю проект, пишу план, составляю структуру, выбираю инструменты и способы реализации.
                </p>
                <span className="about__list_year">Коммуникабельность и работа в команде:</span>
                <p className="about__list_info">
                Адекватно воспринимаю критику, общительный, вежливый и открытый, умею не только слушать но и слышать.
                </p>
                <span className="about__list_year">Способность к обучению и развитию::</span>
                <p className="about__list_info">
                Учеба не пугает, как мотивирует... анализирую свои ошибки и рассматриваю различные подходы, всегда есть чему поучиться новому, технологии не стоят на месте и мы не должны.
                </p>
            </div>
        </div>
    )
}