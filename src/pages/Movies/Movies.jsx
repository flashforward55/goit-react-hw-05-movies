import React, { useState } from 'react';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import {
  MoviesContainer,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  MovieList,
  MovieItem,
  MovieLink,
  MoviePoster,
  PlaceholderPoster,
  ErrorMessage,
} from './Movies.styled';
import { searchMovies } from 'services/api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');

      if (searchQuery.trim() === '') {
        setErrorMessage('Please enter a search query');
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      const results = await searchMovies(searchQuery);

      if (results.length === 0) {
        setErrorMessage('No movies found');
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      setSearchResults(results);
    } catch (error) {
      console.log('Error searching movies:', error);
      setErrorMessage('An error occurred while searching movies.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <MoviesContainer>
      <Title>Search Movies</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      {isLoading ? (
        <Loader />
      ) : (
        <MovieList>
          {searchResults.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`}>
                {movie.poster_path ? (
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <PlaceholderPoster />
                )}
                <span>{movie.title}</span>
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </MoviesContainer>
  );
};

MovieList.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
