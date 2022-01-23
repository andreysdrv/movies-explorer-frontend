/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <section className="aboutme">
      <div className="aboutme__container">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme__inner">
          <div className="aboutme__info-box">
            <p className="aboutme__name">Андрей</p>
            <p className="aboutme__description">Фронтенд-разработчик, 26 лет</p>
            <p className="aboutme__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="aboutme__links">
              <li className="aboutme__links-item"><a className="aboutme__link" href="#">LinkedIn</a></li>
              <li className="aboutme__links-item"><a className="aboutme__link" href="#">Github</a></li>
              <li className="aboutme__links-item"><a className="aboutme__link" href="#">Telegram</a></li>
              <li className="aboutme__links-item"><a className="aboutme__link" href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="aboutme__photo"></div>
        </div>
		  </div>
    </section>
  )
}

export default AboutMe;
