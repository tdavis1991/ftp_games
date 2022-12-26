import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import './gameCard.css';

const GameCard = ({ image, title, desc, id }) => {
  return (
    <Link to={`/game/${id}`}>
      <Card sx={{ width: 300, minHeight: 350 }} className='gameCard__container'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>

  );
}

export default GameCard;