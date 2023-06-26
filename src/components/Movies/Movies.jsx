import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: '6d44761072bd3455ede44a6813ca8a9a',
            query: searchQuery,
          },
        }
      );

      setSearchResults(response.data.results);
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
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>

      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
