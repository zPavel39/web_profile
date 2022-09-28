import React from 'react'

export const AboutPage = () => {
    return (
        <div>
            <div className="main__title">
                <h1>Pavel Golubev</h1>
                <span>Front-End Developer</span>
            </div>
            <div className="main__about">
                <h2 className="about__item-title _item-title">About Me:</h2>
                <p className="about__text">
                    I am studying Frontend development. I want to become a specialist in this field.
                    There is an opportunity to change my life, and I will not miss it. I started studying
                    on my own in January of this year. To test my knowledge, I decided to take courses.
                    At the moment I am taking 2 courses at the same time. I hope that extensive and
                    time-consuming work will bear fruit. I am purposeful, self-study and learning in
                    general are easy. I was familiar with programming from school and then at the institute.
                    I want to be a competent employee of the company that will accept me.
                </p>
            </div>
            <div className="main__education">
                <h2 className="education__item-title _item-title">Education:</h2>
                <div className="education__text">
                    <span className="education__text-year">2018 year:</span>
                    <p className="education__text-info">
                        Kaliningrad State Technical University, Kaliningrad Faculty of Automation and Production
                        Management, Applied Computer Science. bachelor
                    </p>
                    <span className="education__text-year">2022 year:</span>
                    <p className="education__text-info">
                        Course: Frontend Development Basics (Innopolis University)
                    </p>
                </div>
            </div>
        </div>
    )
}
