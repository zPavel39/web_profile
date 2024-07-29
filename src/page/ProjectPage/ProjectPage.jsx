import React from 'react'
import { SlideShow } from '../../components/slideShow/SlideShow'
import './ProjectPage.scss'

export const ProjectPage = ({ show, setShow }) => {
	return (
		<div className='demonstration'>
			<h2 className='demonstration__title'>My project:</h2>
			<div className='demonstration__list'>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						PWA приложение "Конвертер для игровой валюты", Проект содержащий
						стек: ReactTS, Zustand, Tailwind, MUI, Framer Motion).
					</p>
					<div className='demonstration__wrapper'>
						<a
							className='demonstration__link'
							href='https://l2-currency-converter.vercel.app/'
						>
							https://l2-currency-converter
						</a>
						<div style={{ width: '450px', height: '780px' }}>
							<iframe
								src='https://l2-currency-converter.vercel.app/' // замените на URL нужного сайта
								style={{ width: '100%', height: '100%', border: 'none' }}
								title='Example Site'
							/>
						</div>
					</div>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						PWA приложение "ToDoList" (создание/сохранение/удаление задач,
						реализована смена языка интерфейса), проект содержащий стек: React,
						TypeScript, MobX
					</p>
					<div className='demonstration__wrapper'>
						<a
							className='demonstration__link'
							href='https://web-todo-list-pwa.vercel.app/'
						>
							https://web-ToDoList-pwa
						</a>
						<div style={{ width: '450px', height: '780px' }}>
							<iframe
								src='https://web-todo-list-pwa.vercel.app/' // замените на URL нужного сайта
								style={{ width: '100%', height: '100%', border: 'none' }}
								title='Example Site'
							/>
						</div>
					</div>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Калькулятор расчета стоимости лизинга. Проект содержащий стек:
						React, TypeScript.
					</p>
					<div className='demonstration__wrapper'>
						<a
							className='demonstration__link'
							href='https://web-test-leasing-auto.vercel.app/'
						>
							https://web-test-leasing-auto
						</a>
						<div style={{ width: '450px', height: '780px' }}>
							<iframe
								src='https://web-test-leasing-auto.vercel.app/' // замените на URL нужного сайта
								style={{ width: '100%', height: '100%', border: 'none' }}
								title='Example Site'
							/>
						</div>
					</div>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Реализация приложения онлайн заказа ресторанной продукции. Проект
						содержащий стек: React, Routing, Redux-Toolkit, React-redux
					</p>
					<div
						className={'demonstration__wrapper'}
						style={{ minHeight: '250px' }}
					>
						<a
							className='demonstration__link'
							href='https://web-spa-project.vercel.app/'
						>
							https://web-spa-project
						</a>
						<div
							onClick={e => {
								e.stopPropagation()
								setShow(true)
							}}
							className={
								show
									? 'example-container_active example-container'
									: 'example-container'
							}
						>
							<SlideShow />
						</div>
					</div>
				</div>
				<div className='demonstration__section'>
					<p className='demonstration__info'>
						Реализация приложения отображения списка сотрудников (поиск по
						имени, фамилии и тегу, сортировка, информация о каждом сотруднике
						при клике). Проект содержащий стек: React, Routing, Redux-Toolkit,
						React-redux, Axios, SCSS
					</p>
					<div className='demonstration__wrapper'>
						<a
							className='demonstration__link'
							href='https://search-users-project.vercel.app/'
						>
							https://search-users-project
						</a>
						<div style={{ width: '450px', height: '780px' }}>
							<iframe
								src='https://search-users-project.vercel.app/' // замените на URL нужного сайта
								style={{ width: '100%', height: '100%', border: 'none' }}
								title='Example Site'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
