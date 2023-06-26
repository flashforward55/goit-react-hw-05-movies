/*import axios from 'axios';

 export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        params: {
          api_key: '6d44761072bd3455ede44a6813ca8a9a',
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log('Error fetching trending movies:', error);
    return [];
  }
}; */
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '6d44761072bd3455ede44a6813ca8a9a';

const searchParams = new URLSearchParams({
  method: 'GET',
  api_key: KEY,
  language: 'en-US',
  include_adult: false,
  headers: {
    accept: 'application/json',
  },
});

export const fetchTrendingMovies = async () => {
  const path = '/trending/movie/day';

  try {
    const response = await axios.get(`${path}?${searchParams}`);
    return response.data.results;
  } catch (error) {
    console.log('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  const path = '/search/movie';

  try {
    const response = await axios.get(`${path}?${searchParams}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.log('Error searching movies:', error);
    throw error;
  }
};



/* export const searchMovies = async (query) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log('Error searching movies:', error);
    throw error;
  }
};
 */
