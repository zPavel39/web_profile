import React from 'react'
import './AboutPage.scss'

export const AboutPage = () => {
	return (
		<div className='about'>
			<div className='about__title'>
				<h1>Pavel Golubev</h1>
				<span>Front-End Developer</span>
			</div>
			<h2 className='about__caption'>Education:</h2>
			<div className='about__list'>
				<span className='about__list_year'>2012 год:</span>
				<p className='about__list_info'>
					Институт береговой охраны, Автоматизированные системы обработки
					информации и управления (по отраслям), техник
				</p>
				<span className='about__list_year'>2018 год:</span>
				<p className='about__list_info'>
					Калининградский государственный технический университет,
					Калининградский факультет автоматизации и производства, Прикладная
					информатика. бакалавр
				</p>
				<span className='about__list_year'>2022 год:</span>
				<p className='about__list_info'>
					Университет Иннополис, Frontend Development
				</p>
			</div>

			<h2 className='about__caption'>Experience:</h2>
			<div className='about__list'>
				<span className='about__list_year'>
					ООО "Просперити" | Frontend-разработчик | июль 2023 по настоящее время
				</span>
				<p className='about__list_info'>
					Разработка системы управления по автоматизации ресторанного бизнеса,
					подобие rkeepera и iiko. Работаю в команде из 11 человек. Реализовал
					60% функционала административного веб приложения. Совместно с другими
					веб-разработчиками определяю оптимальные технические решения с учетом
					существующих требований и ограничений. На данный момент наша программа
					активно используется внутри торговых сетей компании.
					<ul className='about__listInfo'>
						Разработал разделы:
						<li className='about__listInfo_item'>
							по управлению филиалами/брендами/мультибрендами
						</li>
						<li className='about__listInfo_item'>
							настройки сайта конструктора
						</li>
						<li className='about__listInfo_item'>
							онлайн чат тех-поддержки с использованием WebSocket
						</li>
						<li className='about__listInfo_item'>
							настройки персонала и их должностей
						</li>
						<li className='about__listInfo_item'>
							управление и тонкой настройки маркетинговой системы, цен товаров и
							блюд, и меню каждого филиала в отдельности
						</li>
						<li className='about__listInfo_item'>
							разработал возможность создания файловой структуры раздела
							ассортимента.
						</li>
						<li className='about__listInfo_item'>
							настройки и проведению различных манипуляций с товарами: создание
							ингредиентов, блюд, модификаторов, наборов
						</li>
						<li className='about__listInfo_item'>
							таблицы аналитики продаж, а так же конструктор отчетов
						</li>
					</ul>
					<p className='about__listInfo'>
						Стек: React и его окружение, Redux-toolkit, WebSocket и др.
						библиотеки.
					</p>
				</p>
				<span className='about__list_year'>
					Фриланс и частная практика | Frontend-разработчик | ноябрь 2021 —
					декабрь 2022
				</span>
				<p className='about__list_info'>
					Больше года входил в состав команды, и занимал место в роли Junior
					Frontend разработчика, в мои обязанности входило разработка UI (React,
					Vue) компонентов, работа со стейт менеджерами, API, рефакторинг и
					оптимизация текущего функционала. Вёрстка одностраничных и SPA
					лендингов.
				</p>
			</div>

			<h2 className='about__caption'>About me:</h2>
			<div className='about__list'>
				<span className='about__list_year'>
					Аналитическое мышление и внимательность:
				</span>
				<p className='about__list_info'>
					Cистематизирую полученную информацию и делаю по ней выводы. Перед тем,
					как писать код, изучаю проект, пишу план, составляю структуру, выбираю
					инструменты и способы реализации.
				</p>
				<span className='about__list_year'>
					Коммуникабельность и работа в команде:
				</span>
				<p className='about__list_info'>
					Адекватно воспринимаю критику, общительный, вежливый и открытый, умею
					не только слушать но и слышать.
				</p>
				<span className='about__list_year'>
					Способность к обучению и развитию::
				</span>
				<p className='about__list_info'>
					Учеба не пугает, как мотивирует... анализирую свои ошибки и
					рассматриваю различные подходы, всегда есть чему поучиться новому,
					технологии не стоят на месте и мы не должны.
				</p>
			</div>
		</div>
	)
}
