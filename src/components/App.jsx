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
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &.active {
    background-color: #ff6347;
    color: #fff;
  }
`;

const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <AppContainer>
        <Navigation>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
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
