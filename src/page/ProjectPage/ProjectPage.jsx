import React from 'react'
import './ProjectPage.scss'

export const ProjectPage = () => {
    return (
        <div className="demonstration">
            <h2 className="demonstration__title">My project:</h2>
            <div className="demonstration__list">
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Проект для моего друга, рекламный сайт (html + css + JQery)
                    </p>
                    <a className="demonstration__link" href="https://obrabotka39kld.ru/">https://obrabotka39kld.ru</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Верстка макета
                    </p>
                    <a className="demonstration__link"
                        href="https://vercel.com/zpavel39/web-site-practice">web-site-practice</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Верстка экрана входа и регистрации, реализована валидация при регистарции.
                    </p>
                    <a className="demonstration__link"
                        href="https://web-form-practic-qi3skocxy-zpavel39.vercel.app/">web-form-practice</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Проект содежращий стек: React, Routing, Redux-Toolkit, React-redux
                    </p>
                    <a className="demonstration__link"
                        href="https://web-form-practic-qi3skocxy-zpavel39.vercel.app/">web-form-practice</a>
                </div>
            </div>
        </div>
    )
}
