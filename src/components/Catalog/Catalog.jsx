import React, { useEffect, useState } from 'react'
import '../Catalog/catalog.css'
import {Link} from 'react-router-dom'
import sylphy from '../../img/sylphy.png'
import roxy from '../../img/roxy.png'
import eris from '../../img/eris.png'

export const Catalog = () => {
    let info = 'подробнее'
  return (
    <>
    <div className='list-item'>
        <div className='listTitle'>Список:</div>
        <div className='list-hero'>
            <div className='container-hero'>
                <img src={sylphy} alt='Сильфи'/>
                <div className='name'>Сильфи</div>
                <Link to='/catalog/sylphy' className='button-hero'>{info.toUpperCase()}</Link>
            </div>
            <div className='container-hero'>
                <img src={roxy} alt='Рокси'/>
                <div className='name'>Рокси</div>
                <Link to='/catalog/roxy' className='button-hero'>{info.toUpperCase()}</Link>
            </div>
            <div className='container-hero'>
                <img src={eris} alt='Эрис'/>
                <div className='name'>Эрис</div>
                <Link to='/catalog/eris' className='button-hero'>{info.toUpperCase()}</Link>
            </div>
        </div>
    </div>
    </>
  )
}
