import React from 'react'
import './Main.css'
import { Promo } from '../Promo/Promo'
import { AboutProject } from '../AboutProject/AboutProject'

export const Main = () => {
  return (
    <main>
      <Promo />
      <AboutProject />
    </main>
  )
}
