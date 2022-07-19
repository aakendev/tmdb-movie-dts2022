import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Box, Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';


const Indonesian = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("discover/movie?with_original_language=id");
        setMovies(fetchedMovies.data.results);
      } catch(error) {
        console.log(error)
      }
    }
    fetchMovies();
  },[])
  
  useEffect(() => {
    const sortMovies = (type) => {
      if(type === "asc"){
        const sortAsc = movies.sort((a,b) => a.vote_average - b.vote_average);
        setMovies(sortAsc);
      }
      if(type === "desc"){
        const sortDesc = movies.sort((a,b) => b.vote_average - a.vote_average);
        setMovies(sortDesc);
      }
    }
    sortMovies(queryParams.get('sort'));
  },[queryParams])

  const setSortParams = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
  }

  return (
    <>
      <Box sx={{
        mt: 10, mr: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
        Sort Movies by
        <Button sx={{ ml: 1 }} variant="contained" onClick={() => setSortParams("asc")}>ASC</Button>
        <Button sx={{ ml: 1 }} variant="contained" onClick={() => setSortParams("desc")}>DESC</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
      {
        movies.map((movie) => {
          return <MovieCard movie={movie} />
        })
      }
      </Box>
    </>
  )
}

export default Indonesian;
