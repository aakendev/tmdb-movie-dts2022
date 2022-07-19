import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({movie}) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', mt: 10, mb: 10, width: 350, mx: 'auto' }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={BASE_IMAGE_URL + movie.poster_path}
        alt="Life from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {movie.original_title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Box sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center'
          }}>
            <Rating name="read-only" precision={0.1} value={movie.vote_average/2} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(2)}</Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;
