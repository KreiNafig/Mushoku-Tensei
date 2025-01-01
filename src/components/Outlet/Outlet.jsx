import React from 'react'
import './index.css'
import { Link, Outlet } from 'react-router-dom'

export const Semantica = () => {
  return (
    <div className="layout">
        <header>
            <div className="flex_row">
                <div>
                    <Link className="font text_row">Главная</Link>
                    <Link className="font text_row">Контакты</Link>
                    <Link className="font text_row">Информация</Link>
                </div>
                <div>
                    <Link className="font text_row">Регистрация</Link>
                    <Link className="font text_row">Вход</Link>
                </div>
            </div>
        </header>
        <main className='outlet'>
            <Outlet/>
        </main>
        <footer>
            <p>&copy; 2025 Реинкарнация Безработного. Все права защищены.</p>
        </footer>
    </div>
  )
}
