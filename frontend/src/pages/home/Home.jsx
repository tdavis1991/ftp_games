import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

import gameImg from '../../assets/images/tincho-franco-AksmkMQTdik-unsplash.jpg'
import GameCard from '../../components/gameCard/GameCard';
import Paginate from '../../components/pagination/Pagination';
import './home.css';


const Home = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(28);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const res = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', 
      {  
        headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }});
      setGames(res.data);
      setLoading(false);
    }

    fetchGames();
  }, []);
  console.log(games, 'DATA')

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <div>
      <img className='game__banner' src='https://wallpaper.dog/large/20433611.jpg' alt='game banner' />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center' 
      >
        <Grid 
          container 
          spacing={2} 
        >
          {currentGames?.map((game, i) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <GameCard 
                key={game?.title}
                image={game?.thumbnail}
                title={game?.title}
                desc={game?.short_description}
                id={game?.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Paginate totalGames={games.length} gamesPerPage={gamesPerPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
