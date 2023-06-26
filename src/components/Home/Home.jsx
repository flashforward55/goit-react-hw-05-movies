import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.log('Error fetching trending movies:', error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {loading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
