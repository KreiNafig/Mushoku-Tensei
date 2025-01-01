import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className='background-image'>
        <div className='background_body'>
          <div className='container'>
            <div className='flex'>
              <div className='title'>Реинкарнация</div>
              <div className='description'>
                Этот учебный сайт посвящён трём жёнам Рудеуса Грейрата, главного героя аниме "Реинкарнация безработного". Здесь вы сможете узнать больше о каждой из них, их отношениях с Рудеусом и их роли в его жизни.
              </div>
              <Link className='startButton' to='/catalog'>К каталогу</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
