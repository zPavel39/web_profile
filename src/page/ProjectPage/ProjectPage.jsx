import React from 'react'
import './ProjectPage.scss'

export const ProjectPage = () => {
    return (
        <div className="main__project">
            <h2 className="project__item-title _item-title">My project:</h2>
            <div className="project__list">
                <div>
                    <p className="project__info">
                        Проект для моего друга, рекламный сайт (html + css + JQery)
                    </p>
                    <a className="project__link" href="https://obrabotka39kld.ru/">https://obrabotka39kld.ru</a>
                </div>
                <div>
                    <p className="project__info">
                        Верстка макета
                    </p>
                    <a className="project__link"
                        href="https://vercel.com/zpavel39/web-site-practice">web-site-practice</a>
                </div>
                <div>
                    <p className="project__info">
                        Верстка экрана входа и регистрации, реализована валидация при регистарции.
                    </p>
                    <a className="project__link"
                        href="https://web-form-practic-qi3skocxy-zpavel39.vercel.app/">web-form-practice</a>
                </div>
                <div>
                    <p className="project__info">
                        Проект содежращий стек: React, Routing, Redux-Toolkit, React-redux
                    </p>
                    <a className="project__link"
                        href="https://web-form-practic-qi3skocxy-zpavel39.vercel.app/">web-form-practice</a>
                </div>
            </div>
        </div>
    )
}
