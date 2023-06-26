import React, { useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { searchMovies } from 'services/api';

const MoviesContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const MovieList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const MovieItem = styled.li`
  flex: 0 0 calc(100% / 6);
  margin-bottom: 10px;
`;

const MovieLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MoviePoster = styled.img`
  width: 150px; /* Increase the width of the image */
  height: 225px; /* Increase the height of the image */
  margin-bottom: 5px; /* Reduce the bottom margin */
`;

const PlaceholderPoster = styled.div`
  width: 150px;
  height: 225px;
  margin-bottom: 10px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8' standalone='no'?%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='225' height='150' version='1.0'%3e%3cpath fill='%23d4d4d4' d='M0 0v150h225V0H0z'/%3e%3cpath fill='%23fff' d='m64.055077 38.894466 36.105543 36.105536-36.105543 36.105538 12.320373 12.32038 36.10554-36.105547 36.12454 36.124547 12.33939-12.33938-36.12454-36.124551 36.10554-36.105537-12.32039-12.320372-36.10552 36.105536L76.394463 26.55508 64.055077 38.894466z' overflow='visible' style='marker:none'/%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
`;

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      const results = await searchMovies(searchQuery);

      setSearchResults(results);
    } catch (error) {
      console.log('Error searching movies:', error);
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

export default Movies;
