import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoGameControllerOutline, IoCalendarOutline, IoGridOutline } from 'react-icons/io5';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdOutlineExpandMore } from "react-icons/md";

import Screenshot from '../../components/screenshot/Screenshot';
import './gameDetails.css';
import gameImg from '../../assets/images/tincho-franco-AksmkMQTdik-unsplash.jpg'

const GameDetails = () => {
  const {id} = useParams();
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      const res = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, 
      {  
        headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }});
      setGame(res.data);
      setLoading(false);
    }

    fetchGame();
  }, [])

  console.log('DATA', game)

  return (
    <div className='gameDetails__container'>
      <div className='gameDetails__top'>
        <h1>{game?.title}</h1>
        <div className='gameDetails__top__content'>
          <img 
            src={game?.thumbnail}
            alt='game'
            className='gameDetails__image'
          />
          <div className='gameDetails__screenshot'>
            <h2>Screenshots</h2>
            <div className='gameDetails__screenshots'>
              {game?.screenshots?.map((screenshot, i) => (
                <Screenshot image={screenshot?.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='gameDetails__mid'>
        <div className='gameDetails__genres'>
          <h3 className='gameDetails__genre' style={{ borderBottom: '1px solid black' }}><IoGameControllerOutline size={40} style={{ display: 'inline' }} /> Platforms: {game?.platform}</h3>
          <h3 className='gameDetails__genre' style={{ borderBottom: '1px solid black' }}><IoCalendarOutline size={40} style={{ display: 'inline' }} /> Release Date: {game?.release_date}</h3>
          <h3 className='gameDetails__genre'><IoGridOutline size={40} style={{ display: 'inline' }} /> Genre: {game?.genre}</h3>
        </div>
        <div className='gameDetails__desc'>
          <p>{game?.description}</p>
        </div>
      </div>
      <div className='gameDetails__bottom'>
        <a href={`${game?.game_url}`}><Button variant="contained">Website</Button></a>
        <Accordion className='gameDetails__sys'>
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Minimum System Requirements</Typography>
          </AccordionSummary>
            <AccordionDetails>
              <Typography>
                OS: {game?.minimum_system_requirements?.os}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Processor: {game?.minimum_system_requirements?.processor}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Memory: {game?.minimum_system_requirements?.memory}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Graphics: {game?.minimum_system_requirements?.graphics}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Storage: {game?.minimum_system_requirements?.storage}
              </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}


export default GameDetails;



