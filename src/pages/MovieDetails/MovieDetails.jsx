import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Loader from '../../components/Loader/Loader';
import { fetchMovieDetails, fetchCast, fetchReviews } from 'services/api';
import {
  MovieDetailsContainer,
  UpperSection,
  PosterSection,
  PosterImage,
  DetailsSection,
  GoBackButton,
  MovieTitle,
  UserScore,
  Bold,
  SpanBold,
  Overview,
  Genres,
  LowerSection,
  ButtonMovieDetails,
  AdditionalInfo,
  InfoButton,
  TiteInfo,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const movieDetailsData = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetailsData);

        const castData = await fetchCast(movieId);
        setCast(castData);

        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return <div>Unable to fetch movie details.</div>;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movieDetails;
  const userScore = (vote_average * 10).toFixed(2);

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <MovieDetailsContainer>
      <UpperSection>
        <PosterSection>
          {poster_path && (
            <PosterImage
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          )}
        </PosterSection>
        <DetailsSection>
          <GoBackButton onClick={goBack}>Go Back</GoBackButton>
          <MovieTitle>
            {title} ({releaseYear})
          </MovieTitle>
          <UserScore>
            <SpanBold>User Score: </SpanBold>
            {userScore}%
          </UserScore>
          <Overview>
            <Bold>Overview </Bold>
            {overview}
          </Overview>
          <Genres>
            <Bold>Genres </Bold>{' '}
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </Genres>
        </DetailsSection>
      </UpperSection>
      <LowerSection>
        <AdditionalInfo>
          <TiteInfo>Additional Information</TiteInfo>
          <ButtonMovieDetails>
            <li>
              <InfoButton onClick={toggleCast}>Cast</InfoButton>
            </li>
            <li>
              <InfoButton onClick={toggleReviews}>Reviews</InfoButton>
            </li>
          </ButtonMovieDetails>
          <Outlet />
        </AdditionalInfo>
        {showCast && <Cast cast={cast} />}
        {showReviews && (
          <>
            {reviews.length === 0 ? (
              <p>We don't have any reviews for this movie.</p>
            ) : (
              <Reviews reviews={reviews} />
            )}
          </>
        )}
      </LowerSection>
    </MovieDetailsContainer>
  );
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  release_date: PropTypes.string,
};
export default MovieDetails;
