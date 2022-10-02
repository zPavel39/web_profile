import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import { Header } from '../../components/header/header'
import { AboutPage } from '../AboutPage/AboutPage'
import { ProjectPage } from '../ProjectPage/ProjectPage'
import foto from './../../img/foto3.jpg'
import './MainPage.scss'

export const MainPage = () => {

    const navigate = useNavigate()
    useEffect(() => navigate('/about'), [])

    return (
            <div className="wraper">
                <Header />
                <main className="main">
                    <div className="main__content">
                        <div className="main__left">
                            <div className="main__img">
                            <img className='main__img_foto' src={foto} />
                            </div>
                            <div className="main__contact">
                                <h2 className="main__contact_title">Contact:</h2>
                                <ul className="main__contact_list">
                                    <li className="main__contact_str" >My_Telergam:<a className="main__contact_item" href='https://t.me/PavelGolubev39rus'> Pavel*39*</a></li>
                                    <li className="main__contact_str">Mail:<a className="main__contact_item" href='mailto:p.golubev39ru@gmail.com'> p.golubev39ru@gmail.com</a></li>
                                    <li className="main__contact_str">tell.<a className="main__contact_item" href='tell:+79110708688'>+79110708688</a></li>
                                </ul>
                            </div>
                            <div className="main__skils">
                                <h2 className="main__skils_title">Key skills:</h2>
                                <ul className="main__skils_list">
                                    <li className="main__skils_item">HTML</li>
                                    <li className="main__skils_item">CSS</li>
                                    <li className="main__skils_item">Git</li>
                                    <li className="main__skils_item">JS</li>
                                    <li className="main__skils_item">SASS</li>
                                    <li className="main__skils_item">React</li>
                                    <li className="main__skils_item">Redux</li>
                                </ul>
                            </div>
                            <div className="main__english">
                                <h2 className="main__english_title _item-title">English</h2>
                                <p className="main__english_info">
                                    A1-A2 (After I plan to continue studying it)
                                </p>
                            </div>
                        </div>
                        <div className="main__right">
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