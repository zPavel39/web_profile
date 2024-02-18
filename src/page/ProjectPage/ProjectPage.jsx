import React from 'react'
import './ProjectPage.scss'

export const ProjectPage = () => {
	return (
		<div className='demonstration'>
			<h2 className='demonstration__title'>My project:</h2>
			<div className='demonstration__list'>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						PWA приложение "ToDoList" (создание/сохранение/удаление задач,
						реализована смена языка интерфейса), проект содержащий стек: React,
						TypeScript, MobX
					</p>
					<a
						className='demonstration__link'
						href='https://web-todo-list-pwa.vercel.app/'
					>
						web-ToDoList-pwa
					</a>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Калькулятор расчета стоимости лизинга. Проект содержащий стек:
						React, TypeScript.
					</p>
					<a
						className='demonstration__link'
						href='https://web-test-leasing-auto.vercel.app//'
					>
						web-test-leasing-auto
					</a>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Реализация приложения онлайн заказа ресторанной продукции. Проект
						содержащий стек: React, Routing, Redux-Toolkit, React-redux
					</p>
					<a
						className='demonstration__link'
						href='https://web-spa-project.vercel.app/'
					>
						web-spa-project
					</a>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Реализация приложения отображения списка сотрудников (поиск по
						имени, фамилии и тегу, сортировка, информация о каждом сотруднике
						при клике). Проект содержащий стек: React, Routing, Redux-Toolkit,
						React-redux, Axios, SCSS
					</p>
					<a
						className='demonstration__link'
						href='https://search-users-project.vercel.app/'
					>
						search-users-project
					</a>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Верстка формы входа и регистрации, реализована валидация при
						регистрации (на чистом JS лендинг перенесен на React).
					</p>
					<a
						className='demonstration__link'
						href='https://web-form-practic-qi3skocxy-zpavel39.vercel.app/'
					>
						web-form-practice
					</a>
				</div>
			</div>
		</div>
	)
}
