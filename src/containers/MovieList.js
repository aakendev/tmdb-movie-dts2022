import React from 'react';
import tmdb from '../apis/tmdb';
import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box, Button} from '@mui/material';

import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/all/day");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    const sortMovies = (type) => {
      if (type === "asc") {
        const sortedAsc = movies.sort((a,b) => a.vote_average - b.vote_average);
        setMovies(sortedAsc);
      }
      if (type === "desc") {
        const sortedDesc = movies.sort((a,b) => b.vote_average - a.vote_average);
        setMovies(sortedDesc);
      }
    }

    sortMovies(queryParams.get('sort'));
  }, [queryParams]);

  const setSortParams = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
  }

  return (
    <>
      <Box sx={{ mt: 10, mr: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        Sort by Rating
        <Button sx={{ ml: 1 }} variant="contained" onClick={() => setSortParams("asc")}>ASC</Button>
        <Button sx={{ ml: 1 }}  variant="contained" onClick={() => setSortParams("desc")}>DESC</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {
          movies.map(movie => (
            <MovieCard movie={movie}/>
          ))
        }
      </Box>
    </>
  );
}

export default MovieList;
