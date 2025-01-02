import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from '../../../../redux/slices/getInfoMusyoku/getInfo';
import '../Sylphy/sylphy.css'

export const Roxy = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.musyokuTensei)
  useEffect(() => {
    dispatch(fetchInfo())
  }, [])
  console.log(data)
  return (
    <>
    <div className='wrapper'>
      <div className='title'>Рокси</div>
        <div className='containerHeros'>
          <div><img className='img-hero' src={data?.categories.roxy[0].image} alt='Рокси' /></div>
          <div className='containerHero'>
            <div className='descriptionHero'>{data?.categories.roxy[0].description}</div>
            <div className='descriptionHero'>{data?.categories.roxy[0].details.Appearance}</div>
            <div className='descriptionHero'>{data?.categories.roxy[0].details.Personality}</div>
            <div className='descriptionHero'>{data?.categories.roxy[0].details.Background}</div>
          </div>
       </div>
    </div>
    </>
  )
}
