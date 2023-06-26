import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchTrendingMovies } from 'services/api';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieItem = styled.li`
  width: calc(100% / 6);
  margin-bottom: 20px;
  padding: 10px;

  @media (max-width: 1200px) {
    width: calc(100% / 4);
  }

  @media (max-width: 800px) {
    width: calc(100% / 3);
  }

  @media (max-width: 600px) {
    width: calc(100% / 2);
  }
`;

const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const MovieTitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>Trending Movies</Title>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
