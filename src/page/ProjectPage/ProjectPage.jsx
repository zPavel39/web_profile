import React from 'react'
import './ProjectPage.scss'

export const ProjectPage = () => {
    return (
        <div className="demonstration">
            <h2 className="demonstration__title">My project:</h2>
            <div className="demonstration__list">
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Верстка формы входа и регистрации, реализована валидация при регистрации (на чистом JS лендинг перенесен на React).
                    </p>
                    <a className="demonstration__link"
                        href="https://web-form-practic-qi3skocxy-zpavel39.vercel.app/">web-form-practice</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        Реализация приложения онлайн заказа ресторанной продукции. Проект содержащий стек: React, Routing, Redux-Toolkit, React-redux
                    </p>
                    <a className="demonstration__link"
                        href="https://web-spa-project.vercel.app/">web-spa-project</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                    Реализация приложения отображения списка сотрудников (поиск по имени, фамилии и тегу, сортировка, информация о каждом сотруднике при клике). Проект содержащий стек: React, Routing, Redux-Toolkit, React-redux, Axios, SCSS
                    </p>
                    <a className="demonstration__link"
                        href="https://search-users-project.vercel.app/">search-users-project</a>
                </div>
                <div className='demonstration__section'>
                    <p className="demonstration__info">
                        ToDo List c возможностью прикрепления файла и скачивания его. Проект содержащий стек: React, Firebase, Axios, LESS
                    </p>
                    <a className="demonstration__link" href="https://web-todo-project.web.app/">web-todo-project</a>
                </div>
            </div>
        </div>
    )
}