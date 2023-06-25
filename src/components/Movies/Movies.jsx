import React, { useState } from 'react';
import axios from 'axios';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/search-movies',
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
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
