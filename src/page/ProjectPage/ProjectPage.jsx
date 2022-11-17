import React from 'react'
import './ProjectPage.scss'

export const ProjectPage = () => {
    return (
        <div className="demonstration">
            <h2 className="demonstration__title">My project:</h2>
            <div className="demonstration__list">
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Адаптивная верстка, рекламный сайт (html + css + JQuery(слайдер))
                    </p>
                    <a className="demonstration__link" href="https://obrabotka39kld.ru/">https://obrabotka39kld.ru</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Верстка формы входа и регистрации, реализована валидация при регистарции (на чистом JS лендинг перенесен на React).
                    </p>
                    <a className="demonstration__link"
                        href="https://web-form-practic-qi3skocxy-zpavel39.vercel.app/">web-form-practice</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Реализация приложения онлайн заказа рестаранной продукции. Проект содежращий стек: React, Routing, Redux-Toolkit, React-redux
                    </p>
                    <a className="demonstration__link"
                        href="https://web-spa-project.vercel.app/">web-spa-project.vercel.app</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                    Реализация приложения отображения списка сотрудников (поиск по имени, фамилии и тегу, сортировка, информация о каждом сотруднике при клике). Проект содежращий стек: React, Routing, Redux-Toolkit, React-redux, Axios, SCSS
                    </p>
                    <a className="demonstration__link"
                        href="https://search-users-project.vercel.app/">search-users-project.vercel.app</a>
                </div>
            </div>
        </div>
    )
}