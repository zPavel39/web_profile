import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import { Header } from '../../components/header/header'
import { AboutPage } from '../AboutPage/AboutPage'
import { ProjectPage } from '../ProjectPage/ProjectPage'
import photo from './../../img/foto3.jpg'
import './MainPage.scss'

export const MainPage = () => {
	const navigate = useNavigate()
	useEffect(() => navigate('/about'), [])

	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<div className='main__content'>
					<div className='main__left'>
						<div className='main__img'>
							<img className='main__img_photo' src={photo} alt='MyFoto' />
						</div>
						<div className='main__contact'>
							<h2 className='main__contact_title'>Contact:</h2>
							<ul className='main__contact_list'>
								<li className='main__contact_str'>
									My_Telergam:
									<a
										className='main__contact_item'
										href='https://t.me/PavelGolubev39rus'
									>
										Pavel*39*
									</a>
								</li>
								<li className='main__contact_str'>
									<a
										className='main__contact_item email'
										href='mailto:p.golubev39ru@gmail.com'
									>
										{' '}
										p.golubev39ru@gmail.com
									</a>
								</li>
								<li className='main__contact_str'>
									tell.
									<a className='main__contact_item' href='tell:+79110708688'>
										+79110708688
									</a>
								</li>
							</ul>
						</div>
						<div className='main__skills'>
							<h2 className='main__skills_title'>Key skills:</h2>
							<ul className='main__skills_list'>
								<li className='main__skills_item'>HTML</li>
								<li className='main__skills_item'>JS\TS</li>
								<li className='main__skills_item'>SASS</li>
								<li className='main__skills_item'>React\Next</li>
								<li className='main__skills_item'>Redux\Mobx</li>
							</ul>
						</div>
						<div className='main__english'>
							<h2 className='main__english_title _item-title'>English</h2>
							<p className='main__english_info'>
								A1-A2 (After I plan to continue studying it)
							</p>
						</div>
					</div>
					<div className='main__right'>
						<Routes>
							<Route index path='/about' element={<AboutPage />} />
							<Route path='/project' element={<ProjectPage />} />
						</Routes>
					</div>
				</div>
			</main>
		</div>
	)
}
