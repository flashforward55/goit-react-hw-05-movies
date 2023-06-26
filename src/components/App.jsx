import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styled from 'styled-components';

const Home = lazy(() => import('components/Home/Home'));
const Movies = lazy(() => import('components/Movies/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('components/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));

const AppContainer = styled.div`
  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  & > * {
    margin-right: 10px;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #ff4500;
  }
`;

const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <AppContainer>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </Router>
  );
};

export default App;
