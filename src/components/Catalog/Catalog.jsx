import React from 'react'
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
                <img src={sylphy}/>
                <div className='name'>Сильфи</div>
                <Link className='button-hero'>{info.toUpperCase()}</Link>
            </div>
            <div className='container-hero'>
                <img src={roxy}/>
                <div className='name'>Рокси</div>
                <Link className='button-hero'>{info.toUpperCase()}</Link>
            </div>
            <div className='container-hero'>
                <img src={eris}/>
                <div className='name'>Эрис</div>
                <Link className='button-hero'>{info.toUpperCase()}</Link>
            </div>
        </div>
    </div>
    </>
  )
}
