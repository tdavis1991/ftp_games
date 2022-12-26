import React from 'react';
import { useParams } from 'react-router-dom';
import { IoGameControllerOutline, IoCalendarOutline, IoGridOutline } from 'react-icons/io5';
import { useGetGameDetailsQuery } from '../../redux/services/ftpDb';
import Screenshot from '../../components/screenshot/Screenshot';

import './gameDetails.css';
import gameImg from '../../assets/images/tincho-franco-AksmkMQTdik-unsplash.jpg'

const GameDetails = () => {
  const {id} = useParams();
  const { data, isFetching, error } = useGetGameDetailsQuery({ id });

  console.log('DATA', data)

  return (
    <div className='gameDetails__container'>
      <div className='gameDetails__top'>
        <img 
          src={data?.thumbnail}
          alt='game'
          className='gameDetails__image'
        />
        <div className='gameDetails__screenshot'>
          <h2>Screenshots</h2>
          <div className='gameDetails__screenshots'>
            {data?.screenshots?.map((screenshot, i) => (
              <Screenshot image={screenshot?.image} />
            ))}
          </div>
        </div>
      </div>
      <div className='gameDetails__mid'>
        <div className='gameDetails__genres'>
          <h3 className='gameDetails__genre' style={{ borderBottom: '1px solid white' }}><IoGameControllerOutline size={40} style={{ display: 'inline' }} /> Platforms: {data?.platform}</h3>
          <h3 className='gameDetails__genre' style={{ borderBottom: '1px solid white' }}><IoCalendarOutline size={40} style={{ display: 'inline' }} /> Release Date: {data?.release_date}</h3>
          <h3 className='gameDetails__genre'><IoGridOutline size={40} style={{ display: 'inline' }} /> Genre: {data?.genre}</h3>
        </div>
        <div className='gameDetails__desc'>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className='gameDetails__bottom'></div>
    </div>
  )
}

export default GameDetails