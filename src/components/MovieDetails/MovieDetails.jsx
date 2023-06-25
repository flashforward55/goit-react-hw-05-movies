import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

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

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: '6d44761072bd3455ede44a6813ca8a9a',
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              api_key: '6d44761072bd3455ede44a6813ca8a9a',
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const userScore = vote_average * 10;

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

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
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <button onClick={toggleCast}>Cast</button>
          </li>
          <li>
            <button onClick={toggleReviews}>Reviews</button>
          </li>
        </ul>
      </div>
      {showCast && <Cast cast={cast} />}
      {showReviews && <Reviews reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;