import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Grid, Box} from '@mui/material';

import gameImg from '../../assets/images/tincho-franco-AksmkMQTdik-unsplash.jpg'
import GameCard from '../../components/gameCard/GameCard';
import { useGetAllGamesQuery } from '../../redux/services/ftpDb';


const Home = () => {
  console.log(import.meta.env.VITE_API_KEY, 'API KEY')

  const { data, isFetching, error } = useGetAllGamesQuery();
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Grid 
        container 
        spacing={2} 
      >
        {data?.map((game, i) => (
          <Grid item xs={4}>
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
  );
}

export default Home;
