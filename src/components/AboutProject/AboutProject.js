import React from 'react'
import  './AboutProject.css'

const AboutProject = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">О проекте</h2>
        <div className="about__inner">
          <div className="about__text-container">
            <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
            <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about__text-container">
            <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
            <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about__scale-container">
          <div className="about__scale-inner">
            <div className="about__scale about__scale_color_green">1 неделя</div>
            <p className="about__scale-text">Back-end</p>
          </div>
          <div className="about__scale-inner">
            <div className="about__scale about__scale_color_grey">4 недели</div>
            <p className="about__scale-text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject
