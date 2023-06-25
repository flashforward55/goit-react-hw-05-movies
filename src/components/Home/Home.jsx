import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day',
          {
            params: {
              api_key: '6d44761072bd3455ede44a6813ca8a9a',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
