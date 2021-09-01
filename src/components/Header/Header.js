import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo"></Link>
        <Link to="/signup" className="header__link">Регистрация</Link>
        <Link to="/signin" className="header__link header__link_type_button" type="button">Войти</Link>
      </div>
    </header>
  )
}
