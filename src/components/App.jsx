import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { AppContainer, Navigation, NavItem } from './App.styled';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('pages/Cast/Cast.jsx'));
const Reviews = lazy(() => import('pages/Reviews/Reviews.jsx'));

const App = () => {
  return (
    <AppContainer>
      <Navigation>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Navigation>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
};

export default App;
