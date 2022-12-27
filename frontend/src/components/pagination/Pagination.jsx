import React from 'react';
import { Pagination } from '@mui/material';


import './pagination.css';


const Paginate = ({gamesPerPage, totalGames, setCurrentPage}) => {

  const pageNumber = Math.ceil(totalGames / gamesPerPage);
  const handleChange = (e, p) => {
    setCurrentPage(p)
  }
  return (
    <div className='pagination__container'>
      <Pagination 
        sx={{ color: 'white' }}
        count={pageNumber}
        color='primary'
        size='large'
        onChange={handleChange}
      />
    </div>
  )
}

export default Paginate;