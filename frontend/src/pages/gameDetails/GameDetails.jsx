import React from 'react';
import { useParams } from 'react-router-dom';
import { IoGameControllerOutline, IoCalendarOutline, IoGridOutline } from 'react-icons/io5';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdOutlineExpandMore } from "react-icons/md";


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
        <h1>{data?.title}</h1>
        <div className='gameDetails__top__content'>
          <img 
            src={data?.thumbnail}
            // src={gameImg}
            alt='game'
            className='gameDetails__image'
          />
          <div className='gameDetails__screenshot'>
            <h2>Screenshots</h2>
            <div className='gameDetails__screenshots'>
              {data?.screenshots?.map((screenshot, i) => (
                <Screenshot image={screenshot?.image} />
                // <Screenshot image={gameImg} />
              ))}
            </div>
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
      <div className='gameDetails__bottom'>
        <a href={`${data?.game_url}`}><Button variant="contained">Website</Button></a>
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
                OS: {data?.minimum_system_requirements?.os}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Processor: {data?.minimum_system_requirements?.processor}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Memory: {data?.minimum_system_requirements?.memory}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Graphics: {data?.minimum_system_requirements?.graphics}
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                Storage: {data?.minimum_system_requirements?.storage}
              </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}


export default GameDetails;



