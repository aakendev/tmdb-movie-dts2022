import axios from 'axios';

const API_KEY = 'e3776ee52bd907fec869ecf429d5e1b2';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
