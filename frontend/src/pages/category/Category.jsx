import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { display } from '@mui/system';
import axios from 'axios';

import GameCard from '../../components/gameCard/GameCard';
import Paginate from '../../components/pagination/Pagination';
import { platforms, categories, sort_by } from '../../assets/constants';

const Category = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(28);

  const [sort, setSort] = useState({
    platform: '',
    category: '',
    sortBy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSort((prevState) => {
      return {
        ...prevState,
        [name]: value 
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchGames = async () => {
      setLoading(true);
      const res = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${sort.platform}&category=${sort.category}&sort-by=${sort.sortBy}`, 
        { 
          headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        }
      );
      setGames(res.data);
      setLoading(false);
    }

    fetchGames();
  }

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  console.log('GAMES', games)


  return (  
    <div style={{ width: '100%' }}>
      <form style={{ width: '100%', marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <Box sx={{ minWidth: 120, display: 'flex', width: '100%', justifyContent: 'space-between'}}>
          <FormControl sx={{ width: '25%' }}>
            <InputLabel id="demo-simple-select-label">Platform</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort.platform}
              name='platform'
              onChange={handleChange}
            >
              {platforms.map((platform, i) => (
                <MenuItem value={platform.value}>{platform.title}</MenuItem>
              ))}
            </Select>
          </FormControl >
          <FormControl sx={{ width: '25%' }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort.category}
              name='category'
              onChange={handleChange}
            >
              {categories.map((category, i) => (
                <MenuItem value={category.value}>{category.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: '25%' }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort.sortBy}
              name='sortBy'
              onChange={handleChange}
            >
              {sort_by.map((sort, i) => (
                <MenuItem value={sort.value}>{sort.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type='submit' variant='contained' sx={{ padding: '0 4rem' }}>Go!!</Button>
        </Box>
      </form>
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
      {games.length ?
        (
          <Paginate totalGames={games.length} gamesPerPage={gamesPerPage} setCurrentPage={setCurrentPage} />
        ) : (
          null
      )}
    </div>

  );
};

export default Category;