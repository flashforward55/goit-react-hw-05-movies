import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: '6d44761072bd3455ede44a6813ca8a9a',
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  // Calculate user score percentage
  const userScore = vote_average * 10;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        )}
      </div>
      <p>User Score: {userScore}%</p>
      <p>Overview: {overview}</p>
      <p>
        Genres:{' '}
        {genres.map(genre => (
          <span key={genre.id}>{genre.name} </span>
        ))}
      </p>
    </div>
  );
};

export default MovieDetails;
