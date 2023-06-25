import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '6d44761072bd3455ede44a6813ca8a9a';
        const movieId = match.params.movieId;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movies/get-movie-details/${movieId}`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [match.params.movieId]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const apiKey = '6d44761072bd3455ede44a6813ca8a9a';
        const movieId = match.params.movieId;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movies/get-movie-credits/${movieId}`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [match.params.movieId]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const apiKey = '6d44761072bd3455ede44a6813ca8a9a';
        const movieId = match.params.movieId;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movies/get-movie-reviews/${movieId}`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [match.params.movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <h3>Cast:</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
