import React from 'react'
import './Promo.css'
import { NavTab } from '../NavBar/NavTab'

export const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__inner">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <NavTab />
    </section>
  )
}
