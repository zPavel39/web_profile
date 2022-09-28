import React from 'react'
import { Header } from '../../components/header/header'
import { AboutPage } from '../AboutPage/AboutPage'
import { ProjectPage } from '../ProjectPage/ProjectPage'
import './MainPage.scss'

export const MainPage = () => {
    return (
            <div className="wraper">
                <Header />
                <main className="main">
                    <div className="main-content _container">
                        <div className="main__left">
                            <div className="main__img">
{/*                                 <img src="./img/my-foto.jpg" style="height: 250px;" />
 */}                            </div>
                            <div className="main__contact">
                                <h2 className="main__contact-title _item-title">Contact:</h2>
                                <ul className="contact-style">
                                    <li className="contact-style__item">My_Telergam</li>
                                    <li className="contact-style__item">Discord: nickname: Pavel39(@Pavel39)</li>
                                    <li className="contact-style__item">tell.+79110708688</li>
                                </ul>
                            </div>
                            <div className="main__skils">
                                <h2 className="main__skils-title _item-title">Key skills:</h2>
                                <ul className="skils-style">
                                    <li className="skils-style__item">HTML</li>
                                    <li className="skils-style__item">CSS</li>
                                    <li className="skils-style__item">Git</li>
                                    <li className="skils-style__item">JavaScript</li>
                                    <li className="skils-style__item">SASS</li>
                                    <li className="skils-style__item">React</li>
                                    <li className="skils-style__item">Redux</li>
                                </ul>
                            </div>
                            <div className="main__english">
                                <h2 className="main__english-title _item-title">English</h2>
                                <p className="english__info">
                                    A1-A2 (After obtaining a profession I plan to continue studying it)
                                </p>
                            </div>
                        </div>
                        <div className="main__right">
{/*                             <AboutPage />
 */}                            <ProjectPage />
                        </div>
                    </div>
                </main>
            </div>
    )
}