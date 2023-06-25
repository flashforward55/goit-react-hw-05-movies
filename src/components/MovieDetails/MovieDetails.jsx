import React, { useEffect, useState } from 'react';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '6d44761072bd3455ede44a6813ca8a9a'; // Replace with your actual API key
        const movieId = match.params.movieId;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [match.params.movieId]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        const movieId = match.params.movieId;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
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
      {/* Render other movie details */}
    </div>
  );
};

export default MovieDetails;
